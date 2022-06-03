## Description

This is a REST API. It calculates invoices for charging points.

### Main Technologies

- [NestJS](https://docs.nestjs.com/)
- [Docker](https://docs.docker.com/)
- [GitHub Actions (CI/CD)](https://docs.github.com/en/actions)
- [Jest](https://jestjs.io/) & [SuperTest](https://github.com/visionmedia/supertest#readme)

## Prerequisites

Node.js (>= 10.13.0, except for v13).

## Installation

```bash
$ yarn global add @nestjs/cli
```

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Deploy

When you push a `v*` tag (eg: `v1.0.0`), a docker image will be created and will be pushed into the [omidebrahimi/energized-api](https://hub.docker.com/repository/docker/omidebrahimi/energized-api) repository in DockerHub.

You can also build, run, and push the docker image manually:

```bash
# Build
$ yarn docker:build

# Run
$ yarn docker:run

# Push
$ yarn docker:push
```
