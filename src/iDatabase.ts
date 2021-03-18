export const Database = Symbol("Database");
export interface IDatabase {
  connect(): Promise<void>;
  healthcheck(): Promise<void>;
  disconnect(): Promise<void>;
}
