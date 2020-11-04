# mock-algolia

A mock server that mimics the [Algolia](https://www.algolia.com) Search and Indexing APIs.

## Docker

- [`davesag/mock-algolia`](https://hub.docker.com/r/davesag/mock-algolia/)

## Links

- [Algolia](https://www.algolia.com)
- [Algolia API Client](https://www.algolia.com/doc/)

### Current Status

This is very much version `0.0.x` and a hack, not a fully fledged system.

- Very minimal support for adding, updating, and removing data from indices.
- No search queries supported yet (coming when I need them/get around to them)
- I've not written unit or integration tests for the main routes.

### To Use

I am going to assume you are using the Algolia Javascript API Client here, but if not then similar patterns will apply.

#### Prep the client

Normally you'd do this

```js
const client = algoliasearch(applicationId, apiKey)
const index = client.initIndex('some-index-name')

await index.addObjects(arrayOfObjects)
```

To fool the `algoliasearch` client into talking to this mock server, do this instead:

```js
const client = algoliasearch(applicationId, apiKey, { protocol: 'http:' })
client.hosts = {
  read: ['http://localhost:3000'],
  write: ['http://localhost:3000']
}

const index = client.initIndex('some-index-name')

await index.addObjects(arrayOfObjects)
```

Then all the client requests will go to the mock server (assuming it's running on port `3000`)

## Configuration

Set the following environment variables

| Variable | Default | Notes                          |
| -------- | ------- | ------------------------------ |
| `PORT`   | `3000`  | The port the server listens on |

## Development

### Branches

<!-- prettier-ignore -->
| Branch    | Tests | Code Coverage | Audit | Comments |
| --------- | ----- | ------------- | ----- | -------- |
| `develop` | [![CircleCI](https://circleci.com/gh/davesag/mock-algolia/tree/develop.svg?style=svg)](https://circleci.com/gh/davesag/mock-algolia/tree/develop) | [![codecov](https://codecov.io/gh/davesag/mock-algolia/branch/develop/graph/badge.svg)](https://codecov.io/gh/davesag/mock-algolia) | [![Vulnerabilities](https://snyk.io/test/github/davesag/mock-algolia/develop/badge.svg)](https://snyk.io/test/github/davesag/mock-algolia/develop) | Work in progress |
| `master`  | [![CircleCI](https://circleci.com/gh/davesag/mock-algolia/tree/master.svg?style=svg)](https://circleci.com/gh/davesag/mock-algolia/tree/master) | [![codecov](https://codecov.io/gh/davesag/mock-algolia/branch/master/graph/badge.svg)](https://codecov.io/gh/davesag/mock-algolia) | [![Vulnerabilities](https://snyk.io/test/github/davesag/mock-algolia/master/badge.svg)](https://snyk.io/test/github/davesag/mock-algolia/master) | Latest Production Release |

### Prerequisites

- [NodeJS](htps://nodejs.org), stick to version 14.15.0 for now (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.) The `package-lock.json` file format changed between v6 and v7 of `npm` and npm 7 causes all manner of dramas.
- [Docker](https://www.docker.com) if you want to use the Swagger Editor. (Use [Docker for Mac](https://docs.docker.com/docker-for-mac/), not the `homebrew` version)

### To build and run locally

Clone this (or better yet, fork it then clone your fork)

```sh
npm install
npm start
```

Go to [localhost:3000/docs](http://127.0.0.1:3000/docs) to see the docs.

### `.env` file

You can put environment variables in a `.env` file.

### Testing

- `npm test` to run the unit tests
- `npm run test:server` will run the integration tests
- `npm run lint` will lint it
- `npm run prettier` will prettify it
- `npm run test:unit:cov` will run the unit tests with code coverage
- `npm run test:mutants` will run the unit tests with mutation testing

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
