"use strict";

export class BaseError extends Error {
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
