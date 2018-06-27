"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./baseError");
class ValidationError extends baseError_1.BaseError {
    constructor(message, errors) {
        super(message);
        this.message = message;
        this.errors = errors;
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.message = "Validation Error";
        this.errors = errors || [];
        if (message) {
            this.message = message;
        }
        else if (this.errors.length > 0) {
            this.message = this.errors.join(",\n");
        }
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=validationError.js.map