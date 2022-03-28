## Description

**Employees API Service.**

This API provides endpoints to fetch data from employees with enriched data from country and currency, for example.

Enrichment is made by using external services to fetch metadata (timezone, region, currency) from employee country code and appending that information to the personal information we already have.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## [GET] v1/employees

Get all employees with enriched information about country and currency.

```
curl -X GET \
  http://localhost:3000/employees \
  -H 'Host: localhost:3000'
```

```js
// Node.JS Example

var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/employees' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```
