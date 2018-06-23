"use strict";

export interface ILogger {
  debug(format: string, ...params: any[]): void;
  info(format: string, ...params: any[]): void;
  warn(format: string, ...params: any[]): void;
  error(format: string | Error, ...params: any[]): void;
}
