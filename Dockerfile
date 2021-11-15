FROM node:16-alpine

RUN apk -U upgrade

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "start"]
