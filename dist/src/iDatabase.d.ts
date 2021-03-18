export declare const Database: unique symbol;
export interface IDatabase {
    connect(): Promise<void>;
    healthcheck(): Promise<void>;
    disconnect(): Promise<void>;
}
