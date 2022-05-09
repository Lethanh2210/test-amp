"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteNumberCalculator = void 0;
var AbsoluteNumberCalculator = /** @class */ (function () {
    function AbsoluteNumberCalculator() {
    }
    AbsoluteNumberCalculator.findAbsolute = function (num) {
        // throw new Error("Unsupported Operation Exception");
        if (num < 0)
            return -num;
        return num;
    };
    return AbsoluteNumberCalculator;
}());
exports.AbsoluteNumberCalculator = AbsoluteNumberCalculator;
