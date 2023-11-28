FROM node:18-alpine AS base

FROM base as deps

WORKDIR /app

COPY --chown=node:node package*.json ./

ENV NEXT_TELEMETRY_DISABLED 1

RUN mkdir -p node_modules
RUN mkdir -p .next
RUN chown node:node . node_modules .next

USER node
RUN npm ci

FROM base as builder

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /build

# Copy only nexti18 dependencies 
COPY --from=deps /app/node_modules/next-i18next ./node_modules/next-i18next
COPY --from=deps /app/node_modules/core-js ./node_modules/core-js

# Copy only next build files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
