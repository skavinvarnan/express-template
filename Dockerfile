FROM node:10.15.3

RUN npm install yarn -g
RUN yarn global add pm2

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

ENV IS_PROD true
RUN yarn install

COPY . .

EXPOSE 3769
CMD [ "pm2-runtime", "./src/server.js" ]
