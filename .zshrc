export 
PATH="$PATH://Users/otsukaminori/.zshrc/bin"

export PATH=$HOME/.progate/bin:$PATH
eval "$(/opt/homebrew/bin/brew shellenv)"
export RBENV_ROOT="$HOME/.rbenv"
export PATH="$RBENV_ROOT/bin:$PATH"
eval "$(rbenv init -)"
export PATH="/opt/homebrew/opt/mysql@5.7/bin:$PATH"
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

