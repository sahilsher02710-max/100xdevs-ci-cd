#!/bin/bash

cd ~/100xdevs-ci-cd

git pull origin main

pnpm install

pnpm build

pm2 restart next-app || pm2 start pnpm --name "next-app" -- start

pm2 save