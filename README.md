## Disclaimer

These snippets and plugins were made for my personal use, not to appeal to a large audience. However, because I'm a perfectionist, they are modular and documented, so I might as well make them public. If they are useful to someone out there, great (in that case, stars would be appreciated).

Screenshots provided in the README.md could be out of date.

## Themes

I used CSS variables and avoided hard-coding as much as possible, therefore it should work fine with most themes and plugins, but if that's not the case, open an issue. I won't try to support everything out there, but I will take a look.

I use them with the [GitHub theme](https://community.obsidian.md/themes/github-theme) in dark mode, but it works with the default theme in light and dark mode. I won't make promises for other themes. Tested on Windows, Mac and iOS (iPhone only).

All the snippets are independent from each other, you can pick only what you want.

### `display-tags-under-title.css`

| Before                       | After                                                  |
| ---------------------------- | ------------------------------------------------------ |
| ![[img/desktop_tags_before.png]] | ![[img/desktop_tags_after.png]]                            |
| ![[img/mobile_tags_before.jpeg]] | ![[img/mobile_tags_after.jpeg]] |

### `horizontal-ribbon.css`

> [!warning] This snippet could have unexpected side effects if the ribbon is disabled.
> I will support this scenario in the future.

- Make the vertical ribbon horizontal. 
- Removed vault selection.

| Before                 | After                                              |
| ---------------------- | -------------------------------------------------- |
| ![[img/ribbon_before.png]] | ![[img/ribbon_after.png]] |

### `translucent-headers.css`

- Add translucency effects on headers.

| Before                      | After                      |
| --------------------------- | -------------------------- |
| ![[img/main_header_before.png]] | ![[img/main_header_after.png]] |
| ![[img/side_header_before.png]] | ![[img/side_header_after.png]] |

### `css-classes.css`

Add these to the `cssclasses` property for various effects on the note. On it's own, does nothing.

| Class                     | Behavior                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hide‑todos`              | Hides `todo` callouts. When doing homework, I place the instructions in callouts, and use this CSS class to remove them once they are no longer needed. |
| `pdf‑h1‑page‑breaks`      | All level 1 headings (except the first one) will be on new pages on exported PDF files.                                                                 |
| `pdf‑h2‑page‑breaks`      | All level 2 headings (except the first one) will be on new pages on exported PDF files.                                                                 |
| `pdf‑compact‑code‑blocks` | Text of code blocks is more compact on exported PDF files.                                                                                              |
| `pdf‑compact‑tables`      | Tables are more compact on exported PDF files. Useful when content would overflow.                                                                      |

### `text.css`

Changes impacting text styles.

- Each title level has a different color.
- Bold text is red.
- Max line width is increased (700px -> 850px).
- Note title is centered.
- If possible, in PDF files, keep titles on the same page as the content that follows it.

| Before               | After                                              |
| -------------------- | -------------------------------------------------- |
| ![[img/text_before.png]] | ![[img/text_after.png]] |
### `code-blocks.css`

Many subtle adjustments to code style. 
- Padding changes to avoid overlaps.
- Reduce inconsistencies between live preview and reading mode (color and paddings).
- Fixes the issue where punctuation marks following a code block could be on the next line (live preview only).

|                        Before                        |                        After                        |
| :--------------------------------------------------: | :-------------------------------------------------: |
|   Live preview:<br>![[img/code_table_live_before.png]]   |   Live preview:<br>![[img/code_table_live_after.png]]   |
| Reading mode:<br>![[img/code_table_reading_before.png]]  | Reading mode:<br>![[img/code_table_reading_after.png]]  |
|  Live preview:<br>![[img/code_inline_live_before.png]]   |  Live preview:<br>![[img/code_inline_live_after.png]]   |
| Reading mode:<br>![[img/code_inline_reading_before.png]] | Reading mode:<br>![[img/code_inline_reading_after.png]] |
### `image-caption.css`

Add captions to your images. Supports horizontal alignment (left: `ha-l`, center: `ha-c`, right: `ha-r`).

```md
Look, this image has a caption!

> [!caption|ha-c] 
> ![[img/demo-image-horizontal.jpg|300]]
> Caption
```

![[img/image_caption.png]]

### `misc.css`

All the rules that had no place in the other files.

- Removes the view mode button in the header; I prefer using the status bar.
- Buttons in the navigation bar headers cover the entire space available.
- Use the default cursor when hovering buttons. I believe pointer cursors should not be used in desktop apps unless clicking opens the browser.
- Allocate slightly more space to the left pane in the settings window.

|           Before            |                       After                        |
| :-------------------------: | :------------------------------------------------: |
|  ![[img/misc_menu_before.png]]  |              ![[img/misc_menu_after.png]]              |
| ![[img/misc_header_before.png]] | ![[img/misc_header_after.png]] |

### `mobile-fixes.css`

This snippet is for pretty much everything that annoyed me on mobile.

- Adds transparency effects on the drawer.
- Removes the vault selector
- Fixes Kanban.

| Before                        | After                                                  |
| ----------------------------- | ------------------------------------------------------ |
| ![[img/mobile_drawer_before.png]] | ![[img/mobile_drawer_after.png]]                           |
| ![[img/mobile_kanban_before.png]] | ![[img/mobile_kanban_after.png]]<br> |

### `status-bar.css`

This one is opinionated and will likely break unless you use the same plugins as I use.

- Removes bloat.
- Hide the status bar if it's not hovered.

| Before                     | After                                              |
| -------------------------- | -------------------------------------------------- |
| ![[img/status_bar_before.png]] | ![[img/status_bar_after.png]] |

### Plugin/theme patches
These snippets depend on plugins/themes and will do nothing if used alone.
#### `cMenu-edit.css` (requires [cMenu](https://community.obsidian.md/plugins/cmenu-plugin))

Re-styles the floating menu, especially the "glass" style.

| Before                | After                                              |
| --------------------- | -------------------------------------------------- |
| ![[img/cmenu_before.png]] | ![[img/cmenu_after.png]] |

#### `MCL-edit.css` (requires [Modular CSS Layout](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/))

MCL empowers user to create layouts using flexbox with cleverly crafted callouts. I fixed issues I had with the original snippet.

- Added support for custom vertical alignement (top: `va-t`, center: `va-c`, bottom: `va-b`) of then content of columns.
- Fixed exported PDFs.
- Make improvements to paddings.

```md
> [!multi-column]
>>[!blank-container|no-margin|va-c]
>>> [!NOTE] Lorem ipsum
>>> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
>>
>> ![[img/demo-image-horizontal.jpg]]
>
>> [!blank-container|no-margin|va-c|wide-4]
>> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
>> 
>> ![[img/demo-image-vertical.jpg]]
>> 
>> ```css
>> .workspace-ribbon {
>> 	overflow: visible;
>> }
>> 
>> .sidebar-toggle-button {
>> 	top: unset;
>> 	left: unset;
>> 	right: -5%;
>> 	bottom: calc(100vh - 3.5rem);
>> }
>> ```
>
>> [!blank-container|no-margin|va-b]
>>```c
>>void get_flag();
>>void lose();
>>char *global_buff[SIZE];
>>void (*function)(void);
>>```
>> 
>>![[img/demo-image-horizontal.jpg]]
```

|                  Before                  |                                After                                |
| :--------------------------------------: | :-----------------------------------------------------------------: |
|           ![[img/mcl_before.png]]            |                         ![[img/mcl_after.png]]                          |
| Exported PDF:<br>![[img/mcl_pdf_before.png]] | Exported PDF:<br>![[img/mcl_pdf_after.png]] |
#### `GitHub-Theme-edit.css` (requires [GitHub theme](https://community.obsidian.md/themes/github-theme))

Overrides changes made by the GitHub theme that I disagree with and fixes bugs.

- Changes yellow and orange color in dark mode.
- Fixes a bug with the title bar color.
- Resize handles are no longer displayed in the title bar.

| Before                       | After                       |
| ---------------------------- | --------------------------- |
| ![[img/github_theme_before.png]] | ![[img/github_theme_after.png]] |

#### `shiki-edit.css` (requires [Shiki Highlighter](https://community.obsidian.md/plugins/shiki-highlighter))

- In live preview, make Shiki's code blocks's padding identical to Obsidian's native code blocks.
- Shiki's default color matches Obsidian's default color.
- Fixes a bug where plain text files would be unreadable due to low contrast.

| Before                      | After                      |
| --------------------------- | -------------------------- |
| ![[img/shiki_text_before.png]]  | ![[img/shiki_text_after.png]]  |
| ![[img/shiki_block_before.png]] | ![[img/shiki_block_after.png]] |

#### `PlantUML-edit.css` (requires [PlantUML](https://community.obsidian.md/plugins/obsidian-plantuml))

- Removes unnecessary padding below diagrams.
- Centers diagrams.
- Apply border radius to diagrams.

| Before                   | After                                              |
| ------------------------ | -------------------------------------------------- |
| ![[img/plantuml_before.png]] | ![[img/plantuml_after.png]] |

## Plugins
### `cmenu-reading-view-hider` (requires [cMenu](https://community.obsidian.md/plugins/cmenu-plugin))

Automatically hides the cMenu bar when the selected note is in reading mode.

### 🚧 Soon : `shiki-x-execute-code` (requires [Shiki Highlighter](https://community.obsidian.md/plugins/shiki-highlighter) and Execute Code)

I will make a plugin to make Shiki Highlighter compatible with Execute Code.

Obsidian's native code blocks have poor syntax highlighting, look very different in reading mode and live preview. Shiki fixes that.

However, I like being able to execute code on the fly. Execute Code brings that feature, but the button to run the code is missing from Shiki's code blocks.

### 🚧 Soon : `toolbar-formatting`

It's been a while since the last update of [cMenu](https://community.obsidian.md/plugins/cmenu-plugin). While I enjoy the plugin, many of my gripes will likely never get fixed. I already made a plugin to hide the menu when in reading mode, but there is so much more I want to do.

- Make the configuration easier :
	- Being able to re-order items from the UI.
	- Make height ajustable without having to open the json file.
	- Adapt the layout to the number of items in the menu instead of requiring the user to enter the number of items in the menu.
- Fix the code block icon (currently broken in dark mode).
- Create tables from the menu.
- Improve performance. Such a simple plugin has no business taking 100+ms to load on a good computer.
- Animate with a vertical translation the menu appearing/disappearing.
### 🚧 Soon : `better-export-pdf-enhanced`

I want to make my fork of [Better Export PDF](https://community.obsidian.md/plugins/better-export-pdf) to add the following features :

- Strip dark mode styles from the PDF; I'm tired of having to switch to light mode every time I'm exporting.
- As as french speaker, internationalization.
- Replace the default PDF export with the improved one instead of adding another item to the menu.
- Adding the option add a table of content in the export menu rather than applying `toc: true` in the note's properties.
