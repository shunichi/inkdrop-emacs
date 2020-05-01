# Emacs keybindings plugin for Inkdrop

## Features

### Movement
| Keystroke  | Command                        |
|------------|--------------------------------|
| ctrl-f     | editor:go-char-right           |
| ctrl-b     | editor:go-char-left            |
| ctrl-n     | editor:go-line-down            |
| ctrl-p     | editor:go-line-up              |
| ctrl-a     | editor:go-line-start           |
| ctrl-e     | editor:go-line-end             |
| alt-f      | editor:go-word-right           |
| alt-b      | editor:go-word-left            |
| ctrl-v     | editor:go-page-down            |
| alt-v      | editor:go-page-up              |
| ctrl-v     | editor:go-page-down            |
| alt-v      | editor:go-page-up              |
| alt-<      | emacs-mode:beginning-of-buffer |
| alt->      | emacs-mode:end-of-buffer       |

### Deletion / Killing / Yanking
| Keystroke | Command                   |
|-----------|---------------------------|
| ctrl-d    | editor:delete-char-after  |
| alt-d     | emacs-mode:kill-word      |
| ctrl-h    | editor:delete-char-before |
| ctrl-k    | emacs-mode:kill-line      |
| alt-w     | emacs-mode:kill-ring-save |
| ctrl-w    | emacs-mode:kill-region    |
| ctrl-y    | emacs-mode:yank           |
| alt-y     | emacs-mode:yank-pop       |

### Mark / Selection
| Keystroke    | Command                            |
|--------------|------------------------------------|
|ctrl-space    | emacs-mode:set-mark                |
|ctrl-x ctrl-x | emacs-mode:exchange-point-and-mark |
|ctrl-x h      | editor:select-all                  |

### Others
| Keystroke    | Command         |
|--------------|-----------------|
|ctrl-x ctrl-s | core:save-note  |
|ctrl-/        | core:undo       |
|ctrl-s        | editor:find     |
|ctrl-g        | emacs-mode:quit |

## Key customizations

Default keymaps are defined [here](https://github.com/shunichi/inkdrop-emacs/blob/master/keymaps/inkdrop-emacs.json) and you can override them in your `keymap.cson` file.

CSS selectors for this plugin is `.CodeMirror.emacs-mode`.

## Changes

### 0.2.0
* Add some keybindings
  * `ctrl-x ctrl-s` - `core:save-note`
  * `alt-<` - `emacs-mode:beginning-of-buffer`
  * `alt->` - `emacs-mode:end-of-buffer`
