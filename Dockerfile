FROM node:16

WORKDIR /usr/app

COPY package.json .

RUN yarn install --network-timeout 1000000000

COPY . .

RUN yarn --version

# CI=true npm run test

ENTRYPOINT ["/bin/bash","CI=true", "yarn", "test"]
