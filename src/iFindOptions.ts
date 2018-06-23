"use strict";

export type WhereOptions<T> = {
  [P in keyof T]?: string | number | boolean
};

export interface IFindOptions<T> {
  where?: WhereOptions<T>;
  limit?: number;
  offset?: number;
}
