FROM node:16-alpine as builder

RUN apk update && apk upgrade && \
    apk add --no-cache bash

WORKDIR /usr/src/greenhouse

COPY package.json \
     yarn.lock \
     ./src \
     ./
    

RUN yarn install --production

EXPOSE 3001

CMD ["node", "index.js"]