FROM node:23-alpine AS base

WORKDIR /app

FROM base AS deps

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
COPY src/apps/frontend/package.json ./src/apps/frontend/
COPY src/apps/backend/services/gateway/package.json ./src/apps/backend/services/gateway/
COPY src/apps/backend/services/service-1/package.json ./src/apps/backend/services/service-1/
COPY src/apps/backend/services/service-2/package.json ./src/apps/backend/services/service-2/
COPY src/apps/backend/services/service-3/package.json ./src/apps/backend/services/service-3/
COPY src/modules/package.json ./src/modules/
COPY src/types/package.json ./src/types/
COPY src/utils/package.json ./src/utils/

RUN npm ci

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS frontend-runner

ARG NODE_ENV_ARG=development
ENV NODE_ENV=${NODE_ENV_ARG}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/src/apps/frontend/.build.frontend/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/src/apps/frontend/.build.frontend/static ./src/apps/frontend/.build.frontend/static
COPY --from=builder --chown=nextjs:nodejs /app/src/apps/frontend/public ./src/apps/frontend/public

USER nextjs

ARG PORT=38501
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", "src/apps/frontend/server.js"]

FROM base AS backend-gateway-runner

ARG NODE_ENV_ARG=development
ENV NODE_ENV=${NODE_ENV_ARG}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder --chown=nestjs:nodejs /app/src/apps/backend/services/gateway/.build ./.build
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder /app/envs ./envs

USER nestjs

ARG PORT=38502
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", ".build/apps/backend/services/gateway/main"]

FROM base AS backend-service-1-runner

ARG NODE_ENV_ARG=development
ENV NODE_ENV=${NODE_ENV_ARG}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder --chown=nestjs:nodejs /app/src/apps/backend/services/service-1/.build ./.build
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder /app/envs ./envs

USER nestjs

ARG PORT=38503
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", ".build/apps/backend/services/service-1/main"]

FROM base AS backend-service-2-runner

ARG NODE_ENV_ARG=development
ENV NODE_ENV=${NODE_ENV_ARG}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder --chown=nestjs:nodejs /app/src/apps/backend/services/service-2/.build ./.build
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder /app/envs ./envs

USER nestjs

ARG PORT=38504
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", ".build/apps/backend/services/service-2/main"]

FROM base AS backend-service-3-runner

ARG NODE_ENV_ARG=development
ENV NODE_ENV=${NODE_ENV_ARG}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder --chown=nestjs:nodejs /app/src/apps/backend/services/service-3/.build ./.build
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder /app/envs ./envs

USER nestjs

ARG PORT=38505
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", ".build/apps/backend/services/service-3/main"]
