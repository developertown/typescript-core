import { ValidationError } from "./validationError";

export class UniqueConstraintError extends ValidationError {
  constructor(public message: string, public errors: string[]) {
    super(message, errors);
    Object.setPrototypeOf(this, UniqueConstraintError.prototype);
    this.message = "Unique Constraint Error";
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
