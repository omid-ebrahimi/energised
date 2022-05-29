# Stage 1: Build the App

FROM node:16-alpine as builder

RUN yarn global add @nestjs/cli

USER node

WORKDIR ~/energised

COPY --chown=node:node . .

RUN yarn install --production --ignore-scripts --prefer-offline

RUN yarn prebuild

RUN yarn build

# Stage 2: Create Final Image

FROM node:16-alpine

USER node

WORKDIR ~/energised

COPY --from=builder --chown=node:node ~/energised/package.json ./
COPY --from=builder --chown=node:node ~/energised/yarn.lock ./
COPY --from=builder --chown=node:node ~/energised/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node ~/energised/dist/ ./dist/

CMD ["yarn", "start:prod"]

