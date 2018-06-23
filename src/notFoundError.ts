"use strict";

import { BaseError } from "./baseError";

export class NotFoundError extends BaseError {
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
