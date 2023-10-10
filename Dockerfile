FROM node:18-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

COPY --chown=node:node package*.json ./

RUN mkdir -p node_modules
RUN mkdir -p .next
RUN chown node:node . node_modules .next

USER node

RUN npm i

CMD ["npm", "run", "dev"]
