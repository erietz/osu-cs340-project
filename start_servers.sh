#!/usr/bin/env bash

BASE_DIR=$(pwd)
SESSION_NAME="hatchsprint"

create_session() {
    tmux new-session -s ${SESSION_NAME} -n node-rest -c "${BASE_DIR}/hatchsprint-rest" -d
    tmux new-window -t ${SESSION_NAME}:2 -n node-ui -c "${BASE_DIR}/hatchsprint-ui" -d 
    tmux send-keys -t ${SESSION_NAME}:node-rest 'npm start' Enter
    tmux send-keys -t ${SESSION_NAME}:node-ui 'npm start' Enter
}

attach_safely() {
    if [ ! "$TMUX" ]; then
        tmux attach -t ${SESSION_NAME}
    fi
}

main() {
    if [ -n "$(tmux list-sessions | grep ${SESSION_NAME})" ]; then
        echo "Servers are already running..."
        exit 0
    else
        create_session
        attach_safely
    fi
}


main
