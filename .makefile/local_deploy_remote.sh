#!/bin/bash

set -e

source ./.makefile/setup.sh
source ./.makefile/ssh_client.sh
source ./.makefile/ssh_file_upload.sh
source ./.makefile/ssh_directory_upload.sh
source ./.makefile/get_home_secret.sh

main() {

    local host=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_fullstack_typescript.ssh.host')
    local port=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_fullstack_typescript.ssh.port')
    local username=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_fullstack_typescript.ssh.username')
    local password=$(getHomeSecret '.tech.rosinfo.demo.boilerplate_fullstack_typescript.ssh.password')

    if [ -z "$host" ] || [ -z "$port" ] || [ -z "$username" ] || [ -z "$password" ]; then
        echo "Error: Failed to load SSH secrets from $SECRETS_FILE"
        exit 1
    fi

    sshClient init "$host" "$port" "$username" "$password"

    npm run format:fix

    npm run lint:fix

    npm run stylelint:fix

    sshClient execf "docker compose -f /home/boilerplate-fullstack-typescript/app/ops/docker-compose.production.yml down"

    sshClient execf "rm -rf /home/boilerplate-fullstack-typescript/app"

    sshClient execf "mkdir -p /home/boilerplate-fullstack-typescript/app"

    sshFileUpload "./package.json" "/home/boilerplate-fullstack-typescript/app/package.json"

    sshFileUpload "./package-lock.json" "/home/boilerplate-fullstack-typescript/app/package-lock.json"

    sshFileUpload "./tsconfig.json" "/home/boilerplate-fullstack-typescript/app/tsconfig.json"

    sshFileUpload "./tsconfig.base.json" "/home/boilerplate-fullstack-typescript/app/tsconfig.base.json"

    sshDirectoryUpload "./.scripts" "/home/boilerplate-fullstack-typescript/app/.scripts" "/.DS_Store"

    sshDirectoryUpload "./envs" "/home/boilerplate-fullstack-typescript/app/envs" "/.DS_Store"

    sshDirectoryUpload "./ops" "/home/boilerplate-fullstack-typescript/app/ops" "/.DS_Store"

    sshDirectoryUpload "./src" "/home/boilerplate-fullstack-typescript/app/src" "/.DS_Store"

    sshClient execf "chmod -R 0775 /home/boilerplate-fullstack-typescript/app"

    sshClient execf "chown -R boilerplate-fullstack-typescript:www /home/boilerplate-fullstack-typescript/app"

    sshClient exec "docker compose -f /home/boilerplate-fullstack-typescript/app/ops/docker-compose.production.yml up -d"

    sshClient cleanup

}

main "$@"
