# DeveloperTown Core

A small library that adds common interfaces and entities

## Installation

`npm install @developertown/core`

## Usage

```ts
import { BaseEntity } from "@developertown/core";

export class Townie extends BaseEntity {
  public firstName: string;
  public lastName: string;
}
```

## Tests

`npm test`
