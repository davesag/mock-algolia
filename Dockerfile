FROM node:11-alpine
MAINTAINER davesag@gmail.com

WORKDIR /algolia

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN HUSKY_SKIP_INSTALL=true npm install

COPY src src
COPY index.js index.js
COPY api.yml api.yml

EXPOSE 3000
ENTRYPOINT ["npm" , "start" ]
