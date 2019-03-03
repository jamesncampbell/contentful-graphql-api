FROM node:8.13.0

ARG NODE_ENV

ENV NODE_ENV ${NODE_ENV:-development}

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

RUN yarn global add pm2

COPY . .

EXPOSE 4000

CMD ["./start.js"]

# CMD ["pm2-dev", "start", "ecosystem.config.js"]
