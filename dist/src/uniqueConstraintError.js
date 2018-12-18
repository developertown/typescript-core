"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var validationError_1 = require("./validationError");
var UniqueConstraintError = /** @class */ (function (_super) {
    __extends(UniqueConstraintError, _super);
    function UniqueConstraintError(message, errors) {
        var _this = _super.call(this, message, errors) || this;
        _this.message = message;
        _this.errors = errors;
        Object.setPrototypeOf(_this, UniqueConstraintError.prototype);
        _this.message = "Unique Constraint Error";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return UniqueConstraintError;
}(validationError_1.ValidationError));
exports.UniqueConstraintError = UniqueConstraintError;
//# sourceMappingURL=uniqueConstraintError.js.map