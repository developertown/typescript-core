export declare const Logger: unique symbol;
export declare const RemoteLogger: unique symbol;
export interface ILogger {
    debug(format: string, ...params: any[]): void;
    info(format: string, ...params: any[]): void;
    warn(format: string, ...params: any[]): void;
    error(format: string | Error, ...params: any[]): void;
}
