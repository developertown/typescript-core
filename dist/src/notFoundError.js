"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = require("./baseError");
class NotFoundError extends baseError_1.BaseError {
    constructor(message) {
        super(message);
        this.message = message;
        Object.setPrototypeOf(this, NotFoundError.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=notFoundError.js.map