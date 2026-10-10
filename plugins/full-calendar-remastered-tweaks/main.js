const { Plugin, Menu, Platform } = require('obsidian');

const CALENDAR_VIEW_TYPES = ['full-calendar-view', 'full-calendar-sidebar-view'];

// On touch devices, FullCalendar only lets an event be dragged or resized after a long press
// of this duration. Making it practically infinite disables both gestures while taps still open
// the event. (Must stay below 2^31 - 1 ms, otherwise setTimeout fires immediately.)
const NO_DRAG_LONG_PRESS_DELAY = 1e9;

module.exports = class CMenuReadingViewHider extends Plugin {
    async onload() {
        // Layout change
        this.registerEvent(
            this.app.workspace.on('layout-change', () => this.onWorkspaceChange())
        );

        // Active leaf change
        this.registerEvent(
            this.app.workspace.on('active-leaf-change', () => this.onWorkspaceChange())
        );

        // Run once on load in case the plugin is enabled while already in calendar view
        this.app.workspace.onLayoutReady(() => this.onWorkspaceChange());

        this.patchViewMenu();
    }

    onunload() {
        if (this.originalAddItem) {
            Menu.prototype.addItem = this.originalAddItem;
        }
        if (this.calendarProto && this.originalRender) {
            this.calendarProto.render = this.originalRender;
        }
    }

    onWorkspaceChange() {
        this.absorbSwipe();
        if (Platform.isMobile) {
            this.disableEventDragging();
            // The calendar is rendered asynchronously after the view opens; retry until
            // the Calendar prototype has been patched.
            if (!this.calendarProto) {
                window.setTimeout(() => this.disableEventDragging(), 500);
                window.setTimeout(() => this.disableEventDragging(), 2000);
            }
        }
    }

    // Applies to the calendars already open, and patches FullCalendar's Calendar.render so that
    // calendars re-created later (settings change, workspace switch...) are covered too.
    disableEventDragging() {
        for (const cal of this.getAllCalendars()) {
            cal.setOption('eventLongPressDelay', NO_DRAG_LONG_PRESS_DELAY);

            if (!this.calendarProto) {
                const proto = Object.getPrototypeOf(cal);
                const originalRender = proto.render;
                this.calendarProto = proto;
                this.originalRender = originalRender;
                proto.render = function () {
                    this.setOption('eventLongPressDelay', NO_DRAG_LONG_PRESS_DELAY);
                    return originalRender.apply(this, arguments);
                };
            }
        }
    }

    absorbSwipe() {
        const calendarTables = document.getElementsByClassName('fc-scrollgrid  fc-scrollgrid-liquid');
        if (calendarTables.length > 0) {
            calendarTables[0].setAttribute("data-ignore-swipe", "true");
        }
    }

    // In narrow mode, Full Calendar builds its view menu with "3 Days" instead of "Week".
    // Whenever a "3 Days" item is added to a menu, add a "7 Days" item right after it.
    patchViewMenu() {
        const plugin = this;
        const originalAddItem = Menu.prototype.addItem;
        this.originalAddItem = originalAddItem;

        Menu.prototype.addItem = function (callback) {
            let title = null;
            const result = originalAddItem.call(this, item => {
                const originalSetTitle = item.setTitle;
                item.setTitle = function (t) {
                    title = typeof t === 'string' ? t : t?.textContent;
                    return originalSetTitle.apply(this, arguments);
                };
                callback(item);
            });

            if (title === '3 Days') {
                originalAddItem.call(this, item =>
                    item.setTitle('7 Days').onClick(() => {
                        plugin.getCalendar()?.changeView('timeGridWeek');
                    })
                );
            }
            return result;
        };
    }

    getCalendar() {
        const activeView = this.app.workspace.activeLeaf?.view;
        if (activeView?.fullCalendarView) {
            return activeView.fullCalendarView;
        }
        return this.getAllCalendars()[0] ?? null;
    }

    getAllCalendars() {
        const calendars = [];
        for (const type of CALENDAR_VIEW_TYPES) {
            for (const leaf of this.app.workspace.getLeavesOfType(type)) {
                if (leaf.view?.fullCalendarView) {
                    calendars.push(leaf.view.fullCalendarView);
                }
            }
        }
        return calendars;
    }
};
