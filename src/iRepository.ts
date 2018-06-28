"use strict";

import { BaseEntity } from "./baseEntity";
import { IFindOptions } from "./iFindOptions";

export type RepositoryId = number | string;

export interface IRepository<T extends BaseEntity> {
  list(options?: IFindOptions<T>): Promise<T[]>;
  getById(id: RepositoryId): Promise<T | null>;
  add(entity: T): Promise<T>;
  update(entity: T): Promise<void>;
  delete(entity: T): Promise<void>;
  drop(): Promise<void>;
}
