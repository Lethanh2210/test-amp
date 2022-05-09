"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe('Tinh so ngay', function () {
    var calc = new app_1.NextDayCalculator();
    test('return', function () {
        expect(calc.calculatorNextDay(1, 1, 2018)).toBe("2, 1, 2018");
    });
    test('return', function () {
        expect(calc.calculatorNextDay(31, 1, 2018)).toBe("1, 2, 2018");
    });
    test('return', function () {
        expect(calc.calculatorNextDay(30, 4, 2018)).toBe("1, 5, 2018");
    });
    test('return', function () {
        expect(calc.calculatorNextDay(28, 2, 2018)).toBe("1, 3, 2018");
    });
    test('return', function () {
        expect(calc.calculatorNextDay(29, 2, 2020)).toBe("1, 3, 2020");
    });
    test('return', function () {
        expect(calc.calculatorNextDay(31, 12, 2018)).toBe("1, 1, 2019");
    });
});
