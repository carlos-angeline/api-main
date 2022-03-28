## Proposal

**Proposal to get this app production-ready.**

- Author: Carlos Angeline
- Last Revision: nov. 9th, 2021.




This document provides information on how this app can be adjusted to make it production-ready.

## Health Endpoint

Development of a /health endpoint that only function is to return => "OK".

The idea behind it is to have a simple way to see if the API service is up, you can use Pingdom/other tools to check every 5 min (e.g.) and notify you if the endpoint is not reachable.

## Infrastructure

The project shall make use of Serverless Framework to deploy it to lambda functions (AWS, for example - but other cloulds supported).

We don't need the overhead of handling a full server for this application, therefore serveless makes sense on this case.

It'll require the creation of a `serverless.yml` file configuring two environments:

- `stg` to test changes that passed CI/CD and tests; but still need to be QA'ed before reaching production.
- `prod` to be consumed by our final customer (a frontend interface, for example)

This is cost-wise, we just need to ensure we reach a good startup time using webpack `nest build --webpack`.

Reference: https://docs.nestjs.com/faq/serverless#serverless

## Hooks and CI/CD

Husky can be used to pre-commits and pre-push at local development, an ideal scenario would be:

- `pre-commit`: lint && prettier to fix identation and keep a standard across different branches.
- `pre-push`: run tests and only push if all test cases pass; we can avoid breaking changes to even hit a PR.

We can use then Github Actions (or similar) to configure two steps of CI/CD:

- `test`: runs test across the desired matrix of versions / OS and ensure all tests are passing.
- `deploy`: build a compiled version of the app; if at `main` or `develop` branch - deploy it to `prod` or `stg` environment on push.

## Logging

We can use a managed solution like Datadog to generate log information about the transactions we're processing.

A good log to be generated/logged: errors at controller level, with useful information like params used or enough information to reproduce the request if we detect a production error.

## Persistence Layer

We can connect to a managed instance of SQL or noSQL - we can then pick a library, like TypeORM or Mongoose. To get that implemented we need only two steps given we are already using the Repository Pattern in our current code base:

- Create entities to represent the resources we're working with, e.g.: Employee.
- Modifiy .repository.ts files to connect with external sources instead fetching data locally.

## Authentication

A bearer token to be validated by a Auth Service would be enough here. Note: this auth library can be build apart from this service and consumed as a npm package, for example.

We can use a middleware to ensure the request only pass to Controllers if Auth is OK!

At request level, users would need to send a Bearer Token at request's headers.

## Caching

Since we consume a lot from countries external REST Service, we must cache the returned metadata from a given country in a fast-read cache like Redis using the code country as key, for example.

This way we have fast access without need to do a request every time we need to get information about US or India.

Going further, we can even store the data at database level to avoid hitting the external service given that currency, timezone and region aren't information that change often.
