"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleClassifier = void 0;
var TriangleClassifier = /** @class */ (function () {
    function TriangleClassifier() {
    }
    TriangleClassifier.prototype.triangleClass = function (a, b, c) {
        if (!(a + b > c && b + c > a && c + a > b)) {
            return "khong phai tam giac";
        }
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
            return "tam giac vuong";
        }
        if (a === b && b === c) {
            return "tam giac deu";
        }
        if (a === b) {
            return "tam giac can";
        }
    };
    return TriangleClassifier;
}());
exports.TriangleClassifier = TriangleClassifier;
