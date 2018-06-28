"use strict";

import { BaseEntity } from "./baseEntity";

export interface IMapper<T extends BaseEntity> {
  map(resource: any): T;
}
