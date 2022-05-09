"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe("phan loai tam giac", function () {
    var triangle = new app_1.TriangleClassifier();
    test('perfect Triangle', function () {
        var a = 2;
        var b = 2;
        var c = 2;
        expect(triangle.triangleClass(a, b, c)).toBe("tam giac deu");
    });
    test('perfect Triangle', function () {
        var a = 2;
        var b = 2;
        var c = 3;
        expect(triangle.triangleClass(a, b, c)).toBe("tam giac can");
    });
    test('tam giac vuong', function () {
        var a = 3;
        var b = 4;
        var c = 5;
        expect(triangle.triangleClass(a, b, c)).toBe("tam giac vuong");
    });
    test('check Triangle', function () {
        var a = 8;
        var b = 2;
        var c = 3;
        expect(triangle.triangleClass(a, b, c)).toBe("khong phai tam giac");
    });
    test('check Triangle', function () {
        var a = -1;
        var b = 2;
        var c = 1;
        expect(triangle.triangleClass(a, b, c)).toBe("khong phai tam giac");
    });
    test('check Triangle', function () {
        var a = 0;
        var b = 1;
        var c = 1;
        expect(triangle.triangleClass(a, b, c)).toBe("khong phai tam giac");
    });
});
