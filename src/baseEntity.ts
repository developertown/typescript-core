"use strict";

import { RepositoryId } from "./iRepository";

export class BaseEntity {
  public id: RepositoryId;

  constructor(options?: any) {
    this.id = options.id;
  }
}
