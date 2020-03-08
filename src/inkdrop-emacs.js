import { logger } from 'inkdrop'
import { CompositeDisposable, Disposable } from 'event-kit'
import CodeMirror from 'codemirror'
import { clipboard } from 'electron'

class Plugin {
  activate() {
    // this.vim = vimKeymap(CodeMirror)
    if (inkdrop.isEditorActive()) {
      this.activateMode(inkdrop.getActiveEditor())
    }
    inkdrop.onEditorLoad(this.handleEditorLoad)
  }

  deactivate() {
    if (this.disposables) {
      this.disposables.dispose()
    }
    if (inkdrop.isEditorActive()) {
      this.deactivateMode(inkdrop.getActiveEditor())
    }
  }

  activateMode(editor) {
    const { cm } = editor;
    this.originalKeyMap = cm.getOption('keyMap');

    // cm.setOption('keyMap', 'vim')
    // cm.on('vim-mode-change', this.handleVimModeChange)
    // cm.on('focus', this.handleFocusEditor)

    const el = cm.getWrapperElement();
    el.classList.add('emacs-mode')

    // this.registerCommands()
    // this.registerExCommands()
  }

  deactivateMode(editor) {
    const { cm } = editor
    if (cm && this.originalKeyMap) {
      // cm.setOption('keyMap', this.originalKeyMap)
      // cm.off('vim-mode-change', this.handleVimModeChange)
      const el = cm.getWrapperElement()
      el.classList.remove('emacs-mode')
    }
  }

  handleEditorLoad = editor => {
    this.activateMode(editor)
  };

  registerCommands() {
    const disposables = new CompositeDisposable()
    const editor = inkdrop.getActiveEditor()
    const { cm } = editor
    const wrapper = cm.getWrapperElement()
  }
};

module.exports = new Plugin();
// module.exports = {

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
