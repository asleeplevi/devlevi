FROM node:18-alpine AS base

ENV NODE_ENV=development

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci
ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .
RUN chown -R node:node /opt/app

USER node

EXPOSE 1337

CMD ["npm", "run", "develop"]
