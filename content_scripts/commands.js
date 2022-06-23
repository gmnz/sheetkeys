Commands = {
  commands: {
    // Cursor movement
    moveUp: { fn: SheetActions.moveUp.bind(SheetActions),
              name: "Move up",
              group: "movement" },
    moveDown: { fn: SheetActions.moveDown.bind(SheetActions),
                name: "Move down",
                group: "movement" },
    moveLeft: { fn: SheetActions.moveLeft.bind(SheetActions),
                name: "Move left",
                group: "movement" },
    moveRight: { fn: SheetActions.moveRight.bind(SheetActions),
                 name: "Move right",
                 group: "movement" },

    // Row & column movement
    moveRowsDown: { fn: SheetActions.moveRowsDown.bind(SheetActions),
                    name: "Move rows down",
                    group: "movement" },
    moveRowsUp: { fn: SheetActions.moveRowsUp.bind(SheetActions),
                  name: "Move rows up",
                  group: "movement" },
    moveColumnsLeft: { fn: SheetActions.moveColumnsLeft.bind(SheetActions),
                       name: "Move columns left",
                       group: "movement" },
    moveColumnsRight: { fn: SheetActions.moveColumnsRight.bind(SheetActions),
                        name: "Move columns right",
                        group: "movement" },

    // Editing
    editCell: { fn: SheetActions.editCell.bind(SheetActions),
                name: "Edit cell",
                group: "editing" },
    editCellAppend: { fn: SheetActions.editCellAppend.bind(SheetActions),
                      name: "Append to cell",
                      group: "editing" },
    undo: { fn: SheetActions.undo.bind(SheetActions),
            name: "Undo",
            group: "editing" },
    redo: { fn: SheetActions.redo.bind(SheetActions),
            name: "Redo",
            group: "editing" },
    replaceChar: { fn: UI.replaceChar.bind(UI),
                   name: "Replace",
                   group: "editing" },
    openRowBelow: { fn: SheetActions.openRowBelow.bind(SheetActions),
                    name: "Add and edit rows below",
                    group: "editing" },
    openRowAbove: { fn: SheetActions.openRowAbove.bind(SheetActions),
                    name: "Add and edit rows above",
                    group: "editing" },
    insertRowBelow: { fn: SheetActions.insertRowBelow.bind(SheetActions),
                      name: "Insert row below",
                      group: "editing" },
    insertRowAbove: { fn: SheetActions.insertRowAbove.bind(SheetActions),
                      name: "Insert row above",
                      group: "editing" },
    deleteRowsOrColumns: { fn: UI.deleteRowsOrColumns.bind(UI),
                           name: "Delete selected rows/columns",
                           group: "editing" },
    clear: { fn: SheetActions.clear.bind(SheetActions),
             name: "Clear",
             group: "editing" },
    changeCell: { fn: SheetActions.changeCell.bind(SheetActions),
                  name: "Change cell",
                  group: "editing" },
    copyRow: { fn: SheetActions.copyRow.bind(SheetActions),
               name: "Copy row",
               group: "editing" },
    commitCellChanges: { fn: SheetActions.commitCellChanges.bind(SheetActions),
                         name: "Finish editing cell",
                         group: "editing" },
    moveCursorToCellLineEnd: { fn: SheetActions.moveCursorToCellLineEnd.bind(SheetActions),
                               name: "Move cursor to line end",
                               group: "editing" },
    exitMode: { fn: UI.exitMode.bind(UI),
                name: "Exit the current mode",
                group: "editing" },

    // Merging cells
    mergeAllCells: { fn: SheetActions.mergeAllCells.bind(SheetActions),
                   name: "Merge all cells",
                   group: "editing" },
    mergeCellsHorizontally: { fn: SheetActions.mergeCellsHorizontally.bind(SheetActions),
                   name: "Merge cells horizontally",
                   group: "editing" },
    mergeCellsVertically: { fn: SheetActions.mergeCellsVertically.bind(SheetActions),
                   name: "Merge cells vertically",
                   group: "editing" },
    unmergeCells: { fn: SheetActions.unmergeCells.bind(SheetActions),
                   name: "Unmerge cells",
                   group: "editing" },

    // "Yank cell"
    copy: { fn: SheetActions.copy.bind(SheetActions),
                   name: "Copy",
                   group: "editing" },
    paste: { fn: SheetActions.paste.bind(SheetActions),
                   name: "Paste",
                   group: "editing" },

    // Selection
    enterVisualMode: { fn: UI.enterVisualMode.bind(UI),
                   name: "Enter selection mode",
                   group: "selection" },
    // TODO(philc): Rename to visual row mode
    enterVisualLineMode: { fn: UI.enterVisualLineMode.bind(UI),
                   name: "Begin selecting entire rows",
                   group: "selection" },
    enterVisualColumnMode: { fn: UI.enterVisualColumnMode.bind(UI),
                   name: "Begin selecting entire columns",
                   group: "selection" },
    // TODO(philc): These can be removed; they're awkward to expose to the user. Just have moveUp etc. check
    // if we're in a mode, and then preserve the selection.
    moveDownAndSelect: { fn: SheetActions.moveDownAndSelect.bind(SheetActions),
                   name: "Expand selection downwards",
                   group: "selection" },
    moveUpAndSelect: { fn: SheetActions.moveUpAndSelect.bind(SheetActions),
                   name: "Expand selection upwards",
                   group: "selection" },
    moveLeftAndSelect: { fn: SheetActions.moveLeftAndSelect.bind(SheetActions),
                   name: "Expand selection leftwards",
                   group: "selection" },
    moveRightAndSelect: { fn: SheetActions.moveRightAndSelect.bind(SheetActions),
                   name: "Expand selection rightwards",
                   group: "selection" },

    // Scrolling
    scrollHalfPageDown:{ fn: SheetActions.scrollHalfPageDown.bind(SheetActions),
                         name: "Scroll half page down",
                         group: "movement" },
    scrollHalfPageUp: { fn: SheetActions.scrollHalfPageUp.bind(SheetActions),
                        name: "Scroll half page up",
                        group: "movement" },
    scrollToTop: { fn: SheetActions.scrollToTop.bind(SheetActions),
                   name: "Scroll to top",
                   group: "movement" },
    scrollToBottom: { fn: SheetActions.scrollToBottom.bind(SheetActions),
                      name: "Scroll to bottom",
                      group: "movement" },

    // Tabs
    moveTabRight: { fn: SheetActions.moveTabRight.bind(SheetActions),
                   name: "Move tab right",
                   group: "tabs" },
    moveTabLeft: { fn: SheetActions.moveTabLeft.bind(SheetActions),
                   name: "Move tab left",
                   group: "tabs" },
    nextTab: { fn: SheetActions.nextTab.bind(SheetActions),
                   name: "Next tab",
                   group: "tabs" },
    prevTab: { fn: SheetActions.prevTab.bind(SheetActions),
                   name: "Previous tab",
                   group: "tabs" },

    // Formatting
    wrap: { fn: SheetActions.wrap.bind(SheetActions),
                   name: "Wrap cell",
                   group: "formatting" },
    overflow: { fn: SheetActions.overflow.bind(SheetActions),
                   name: "Overflow cell",
                   group: "formatting" },
    clip: { fn: SheetActions.clip.bind(SheetActions),
                   name: "Clip cell",
                   group: "formatting" },
    alignLeft: { fn: SheetActions.alignLeft.bind(SheetActions),
                   name: "Align left",
                   group: "formatting" },
    alignCenter: { fn: SheetActions.alignCenter.bind(SheetActions),
                   name: "Align center",
                   group: "formatting" },
    alignRight: { fn: SheetActions.alignRight.bind(SheetActions),
                   name: "Align right",
                   group: "formatting" },
    colorCellWhite: { fn : SheetActions.colorCellWhite.bind(SheetActions),
                   name: "Color background white",
                   group: "formatting" },
    colorCellLightYellow3: { fn : SheetActions.colorCellLightYellow3.bind(SheetActions),
                   name: "Color background light yellow 3",
                   group: "formatting" },
    colorCellLightCornflowerBlue3: { fn : SheetActions.colorCellLightCornflowerBlue3.bind(SheetActions),
                   name: "Color cell light corn flower blue 3",
                   group: "formatting" },
    colorCellLightPurple: { fn : SheetActions.colorCellLightPurple.bind(SheetActions),
                   name: "Color cell light purple",
                   group: "formatting" },
    colorCellLightRed3: { fn : SheetActions.colorCellLightRed3.bind(SheetActions),
                   name: "Color cell light red 3",
                   group: "formatting" },
    colorCellLightGray2: { fn : SheetActions.colorCellLightGray2.bind(SheetActions),
                   name: "Color cell light gray 2",
                   group: "formatting" },
    // TODO(philc): Add a fontSizeLarge command
    fontSizeNormal: { fn : SheetActions.setFontSize10.bind(SheetActions),
                   name: "Set font size to normal",
                   group: "formatting" },
    fontSizeSmall: { fn : SheetActions.setFontSize8.bind(SheetActions),
                   name: "Set font size to small",
                   group: "formatting" },
    freezeRow: { fn: SheetActions.freezeRow.bind(SheetActions),
                   name: "Freeze row",
                   group: "formatting" },
    freezeColumn: { fn: SheetActions.freezeColumn.bind(SheetActions),
                   name: "Freeze column",
                   group: "formatting" },

    // Misc
    showHelp: { fn: SheetActions.showHelpDialog,
                name: "Show help",
                group: "other" },
    toggleFullScreen: { fn: SheetActions.toggleFullScreen.bind(SheetActions),
                   name: "Toggle full screen",
                   group: "other" },
    openCellAsUrl: { fn: SheetActions.openCellAsUrl.bind(SheetActions),
                   name: "Open URL in cell in a new tab",
                   group: "other" },
    reloadPage: { fn: UI.reloadPage.bind(UI),
                   name: "Reload page",
                   group: "other" },
  },

  defaultMappings: {
    "normal": {
      // Cursor movement
      "k": "moveUp",
      "j": "moveDown",
      "h": "moveLeft",
      "l": "moveRight",

      // Row & column movement
      "<C-J>": "moveRowsDown",
      "<C-K>": "moveRowsUp",
      "<C-H>": "moveColumnsLeft",
      "<C-L>": "moveColumnsRight",

      // TODO(philc): remove this because it's custom to my configuration
      "BACKSPACE": "moveColumnsLeft",

      // Editing
      "i": "editCell",
      "a": "editCellAppend",
      "u": "undo",
      "<C-r>": "redo",
      "r": "replaceChar",
      "o": "openRowBelow",
      "O": "openRowAbove",
      "s": "insertRowBelow",
      "S": "insertRowAbove",
      "d,d": "deleteRowsOrColumns",
      "x": "clear",
      "c,c": "changeCell",
      "y,y": "copyRow",

      // Merging cells
      ";,m,a": "mergeAllCells",
      ";,m,u": "unmergeCells",
      ";,m,h": "mergeCellsHorizontally",
      ";,m,v": "mergeCellsVertically",

      // "Yank cell"
      "y,c": "copy",
      "p": "paste",

      // Selection
      "v": "enterVisualMode",
      "V": "enterVisualLineMode",
      "<A-v>": "enterVisualColumnMode",

      // Scrolling
      "<C-d>": "scrollHalfPageDown",
      "<C-u>": "scrollHalfPageUp",
      "g,g": "scrollToTop",
      "G": "scrollToBottom",

      // Tabs
      ">,>": "moveTabRight",
      "<,<": "moveTabLeft",
      "g,t": "nextTab",
      "g,T": "prevTab",
      "J": "prevTab",
      "K": "nextTab",

      // Formatting
      ";,w,w": "wrap",
      ";,w,o": "overflow",
      ";,w,c": "clip",
      ";,a,l": "alignLeft",
      ";,a,c": "alignCenter",
      ";,a,r": "alignRight",
      ";,c,w": "colorCellWhite",
      ";,c,y": "colorCellLightYellow3",
      ";,c,b": "colorCellLightCornflowerBlue3",
      ";,c,p": "colorCellLightPurple",
      ";,c,r": "colorCellLightRed3",
      ";,c,g": "colorCellLightGray2",
      ";,f,n": "fontSizeNormal",
      ";,f,s": "fontSizeSmall",
      ";,f,r": "freezeRow",
      ";,f,c": "freezeColumn",

      // Misc
      "?": "showHelp",
      ";,w,m": "toggleFullScreen", // Mnemonic for "window maximize"
      ";,w,f": "toggleFullScreen", // Mnemonic for "window full screen"
      ";,o": "openCellAsUrl",
      // For some reason Cmd-r, which normally reloads the page, is disabled by sheets.
      "<M-r>": "reloadPage",
      // Don't pass through ESC to the page in normal mode. If you hit ESC in normal mode, nothing should
      // happen. If you mistakenly type it in Sheets, you will exit full screen mode.
      "esc": "exitMode"
    },

    "insert": {
      // In normal Sheets, esc takes you out of the cell and loses your edits. That's a poor experience for
      // people used to Vim. Now ESC will save your cell edits and put you back in normal mode.
      "esc": "commitCellChanges",
      // In form fields on Mac, C-e takes you to the end of the field. For some reason C-e doesn't work in
      // Sheets. Here, we fix that.
      "<C-e>": "moveCursorToCellLineEnd",
      "<M-r>": "reloadPage"
    }
  }
};

Commands.defaultMappings.visual = Object.assign(clone(Commands.defaultMappings.normal), {
  "j": "moveDownAndSelect",
  "k": "moveUpAndSelect",
  "h": "moveLeftAndSelect",
  "l": "moveRightAndSelect",
  "y": "copy",
  "y,y": null // Unbind "copy row", because it's superceded by "copy"
});

Commands.defaultMappings.visualLine = clone(Commands.defaultMappings.visual);
Commands.defaultMappings.visualColumn = clone(Commands.defaultMappings.visual);
