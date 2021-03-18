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
var baseError_1 = require("./baseError");
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, NotFoundError.prototype);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return NotFoundError;
}(baseError_1.BaseError));
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=notFoundError.js.map