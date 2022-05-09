"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
describe('app()', function () {
    it('return true when bum > 0 ', function () {
        expect((0, app_1.App)(2)).toBe(true);
    });
    it('return true when bum = 0 ', function () {
        expect((0, app_1.App)(0)).toBe(false);
    });
});
