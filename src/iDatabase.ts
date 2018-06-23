"use strict";

export interface IDatabase {
  connect(): Promise<void>;
  healthcheck(): Promise<void>;
  disconnect(): Promise<void>;
}
