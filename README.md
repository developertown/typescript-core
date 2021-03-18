# DeveloperTown Core

A small library that adds common interfaces and entities

## Installation

**NOTE:** This package is not currently published via NPM.  Installation using this method will install directly from github, with the potential pitfall of causing errors in your application if an incompatible change is introduced.

`npm install --save developertown/typescript-core`

## Usage

```ts
import { BaseEntity } from "@developertown/core";

export class Townie extends BaseEntity {
  public firstName: string;
  public lastName: string;
}
```

## Tests

### With Docker

```
docker-compose -p typescript-core -f ./deployment/development/docker-compose.yml -f ./deployment/development/docker-compose.test.yml run app
```
