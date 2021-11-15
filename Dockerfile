FROM node:16-alpine

RUN apk -U upgrade

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN yarn

COPY . .

CMD ["yarn", "start"]
