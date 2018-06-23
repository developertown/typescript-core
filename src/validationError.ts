"use strict";

import { BaseError } from "./baseError";

export class ValidationError extends BaseError {
  constructor(public message: string, public errors: string[]) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.message = "Validation Error";
    this.errors = errors || [];

    if (message) {
      this.message = message;
    } else if (this.errors.length > 0) {
      this.message = this.errors.join(",\n");
    }
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
