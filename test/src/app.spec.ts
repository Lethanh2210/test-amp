import {App} from "./app";

describe('app()', function () {
    it('return true when bum > 0 ', function () {
        expect(App(2)).toBe(true)
    });
    it('return true when bum = 0 ', function () {
        expect(App(0)).toBe(false)
    });
});