"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseError_1 = require("./baseError");
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message, errors) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.errors = errors;
        Object.setPrototypeOf(_this, ValidationError.prototype);
        _this.message = "Validation Error";
        _this.errors = errors || [];
        if (message) {
            _this.message = message;
        }
        else if (_this.errors.length > 0) {
            _this.message = _this.errors.join(",\n");
        }
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return ValidationError;
}(baseError_1.BaseError));
exports.ValidationError = ValidationError;
//# sourceMappingURL=validationError.js.map