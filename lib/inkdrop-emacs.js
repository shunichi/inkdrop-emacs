"use strict";

var _inkdrop = require("inkdrop");

var _eventKit = require("event-kit");

var _codemirror = _interopRequireDefault(require("codemirror"));

var _electron = require("electron");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Plugin {
  constructor() {
    _defineProperty(this, "handleEditorLoad", editor => {
      this.activateMode(editor);
    });
  }

  activate() {
    // this.vim = vimKeymap(CodeMirror)
    if (inkdrop.isEditorActive()) {
      this.activateMode(inkdrop.getActiveEditor());
    }

    inkdrop.onEditorLoad(this.handleEditorLoad);
  }

  deactivate() {
    if (this.disposables) {
      this.disposables.dispose();
    }

    if (inkdrop.isEditorActive()) {
      this.deactivateMode(inkdrop.getActiveEditor());
    }
  }

  activateMode(editor) {
    const {
      cm
    } = editor;
    this.originalKeyMap = cm.getOption('keyMap'); // cm.setOption('keyMap', 'vim')
    // cm.on('vim-mode-change', this.handleVimModeChange)
    // cm.on('focus', this.handleFocusEditor)

    const el = cm.getWrapperElement();
    el.classList.add('emacs-mode'); // this.registerCommands()
    // this.registerExCommands()
  }

  deactivateMode(editor) {
    const {
      cm
    } = editor;

    if (cm && this.originalKeyMap) {
      // cm.setOption('keyMap', this.originalKeyMap)
      // cm.off('vim-mode-change', this.handleVimModeChange)
      const el = cm.getWrapperElement();
      el.classList.remove('emacs-mode');
    }
  }

  registerCommands() {
    const disposables = new _eventKit.CompositeDisposable();
    const editor = inkdrop.getActiveEditor();
    const {
      cm
    } = editor;
    const wrapper = cm.getWrapperElement();
  }

}

;
module.exports = new Plugin(); // module.exports = {
//   activate() {
//     inkdrop.components.registerClass(InkdropEmacsMessageDialog);
//     inkdrop.layouts.addComponentToLayout(
//       'modal',
//       'InkdropEmacsMessageDialog'
//     )
//   },
//   deactivate() {
//     inkdrop.layouts.removeComponentFromLayout(
//       'modal',
//       'InkdropEmacsMessageDialog'
//     )
//     inkdrop.components.deleteClass(InkdropEmacsMessageDialog);
//   }
// };