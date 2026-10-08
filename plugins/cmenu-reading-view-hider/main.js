const { Plugin } = require('obsidian');

module.exports = class CMenuReadingViewHider extends Plugin {
    async onload() {
        // Layout change
        this.registerEvent(
            this.app.workspace.on('layout-change', () => this.updateVisibility())
        );

        // Active leaf change
        this.registerEvent(
            this.app.workspace.on('active-leaf-change', () => this.updateVisibility())
        );

        // Run once on load in case the plugin is enabled while already in reading view
        this.app.workspace.onLayoutReady(() => this.updateVisibility());
    }

    onunload() {
        this.setBarVisibility(true);
    }

    updateVisibility() {
        const leaf = this.app.workspace.getActiveViewOfType(require('obsidian').MarkdownView);
        const shouldBeVisible = !leaf || leaf.getMode() !== 'preview';
        this.setBarVisibility(shouldBeVisible);
    }

    setBarVisibility(visible) {
        const bar = document.getElementById('cMenuModalBar');
        if (bar) {
            bar.style.visibility = visible ? 'visible' : 'hidden';
        }
    }
};