FROM node:12-slim
MAINTAINER davesag@gmail.com
EXPOSE 8282

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

COPY --chown=node:node package.json package-lock.json src index.js ./

ENV NODE_PATH .
ENV NODE_ENV production
ENV HUSKY_SKIP_INSTALL true

USER node

RUN npm install --production

ENTRYPOINT ["node", "index.js"]
