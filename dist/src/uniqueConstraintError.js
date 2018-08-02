"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationError_1 = require("./validationError");
class UniqueConstraintError extends validationError_1.ValidationError {
    constructor(message, errors) {
        super(message, errors);
        this.message = message;
        this.errors = errors;
        Object.setPrototypeOf(this, UniqueConstraintError.prototype);
        this.message = "Unique Constraint Error";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.UniqueConstraintError = UniqueConstraintError;
//# sourceMappingURL=uniqueConstraintError.js.map