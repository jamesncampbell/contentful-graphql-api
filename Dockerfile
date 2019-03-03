FROM node:8.13.0

ARG NODE_ENV

ENV NODE_ENV ${NODE_ENV:-development}

EXPOSE 4000

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

RUN yarn global add pm2

COPY . .

CMD ["./start.js"]
