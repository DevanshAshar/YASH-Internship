"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtraction = exports.Addition = void 0;
var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.sum = function (a, b) {
        return a + b;
    };
    return Addition;
}());
exports.Addition = Addition;
var Subtraction = /** @class */ (function () {
    function Subtraction() {
    }
    Subtraction.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Subtraction;
}());
exports.Subtraction = Subtraction;
