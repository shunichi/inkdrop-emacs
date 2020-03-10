import { CompositeDisposable } from 'event-kit';
import CodeMirror from 'codemirror';
import emacsKeymap from './emacs';

class Plugin {
  activate() {
    this.emacs = emacsKeymap(CodeMirror);
    if (inkdrop.isEditorActive()) {
      this.activateMode(inkdrop.getActiveEditor());
    }
    inkdrop.onEditorLoad(this.handleEditorLoad);
  }

  deactivate() {
    if (this.emacs) {
      this.emacs.dispose();
    }
    if (this.disposables) {
      this.disposables.dispose();
    }
    if (inkdrop.isEditorActive()) {
      this.deactivateMode(inkdrop.getActiveEditor());
    }
  }

  activateMode(editor) {
    const { cm } = editor;
    this.activated = true;

    const el = cm.getWrapperElement();
    el.classList.add('emacs-mode');

    this.registerCommands();
  }

  deactivateMode(editor) {
    const { cm } = editor;
    if (cm && this.activated) {
      this.activated = false;
      const el = cm.getWrapperElement();
      el.classList.remove('emacs-mode');
    }
  }

  handleEditorLoad = editor => {
    this.activateMode(editor);
  };

  registerCommands() {
    const disposables = new CompositeDisposable();
    const editor = inkdrop.getActiveEditor();
    const { cm } = editor;
    const wrapper = cm.getWrapperElement();

    const handlers = {
      "emacs-mode:exchange-point-and-mark": () => {
        this.emacs.exchangePointAndMark(cm);
      },
      "emacs-mode:set-mark": () => {
        this.emacs.setMark(cm);
      },
      "emacs-mode:quit": () => {
        this.emacs.clearMark(cm);
      },
      "emacs-mode:yank": () => {
        this.emacs.yank(cm);
      },
      "emacs-mode:yank-pop": () => {
        this.emacs.yankPop(cm);
      },
      "emacs-mode:kill-word": () => {
        this.emacs.killWord(cm);
      },
      "emacs-mode:backward-kill-word": () => {
        this.emacs.backwardKillWord(cm);
      },
      "emacs-mode:kill-line": () => {
        this.emacs.killLine(cm);
      },
      "emacs-mode:kill-region": () => {
        this.emacs.killRegion(cm);
      },
      "emacs-mode:kill-ring-save": () => {
        this.emacs.killRingSave(cm);
      },
      // "emacs-mode:kill-sentence": () => {
      // },
      // "emacs-mode:backward-kill-sentence": () => {
      // },
      // "emacs-mode:kill-sexp": () => {
      // },
    };

    disposables.add(inkdrop.commands.add(wrapper, handlers));

    this.disposables = disposables;
  }
};

module.exports = new Plugin();
