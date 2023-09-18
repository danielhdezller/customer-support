#!/bin/sh
set -e

yarn install
yarn build | true
yarn start:debug
