"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzzTranslate = void 0;
var FizzBuzzTranslate = /** @class */ (function () {
    function FizzBuzzTranslate() {
    }
    FizzBuzzTranslate.prototype.traslate = function (n) {
        var isFizz = n % 5 == 0;
        var isBuzz = n % 3 == 0;
        if (isBuzz && isBuzz) {
            return 'FizzBuzz';
        }
        else if (isFizz) {
            return 'Fizz';
        }
        else if (isBuzz) {
            return 'Buzz';
        }
        else {
            if (this.checkDiv3(n)) {
                return 'Fizz';
            }
            else if (this.checkDiv5(n)) {
                return 'Buzz';
            }
            return n + '';
        }
    };
    FizzBuzzTranslate.prototype.checkDiv3 = function (n) {
        while (n !== 0) {
            if (n % 10 === 3) {
                return true;
            }
            n = Math.floor(n / 10);
        }
        return false;
    };
    FizzBuzzTranslate.prototype.checkDiv5 = function (n) {
        while (n !== 0) {
            if (n % 10 === 5) {
                return true;
            }
            n = Math.floor(n / 10);
        }
        return false;
    };
    FizzBuzzTranslate.prototype.callNumber = function (n) {
        var k = 0;
        var called = '';
        while (n !== 0) {
            k = n % 10;
            switch (k) {
                case 0:
                    called = 'khong' + called;
                    break;
                case 1:
                    called = 'mot' + called;
                    break;
                case 2:
                    called = 'hai' + called;
                    break;
                case 3:
                    called = 'ba' + called;
                    break;
                case 4:
                    called = 'bon' + called;
                    break;
                case 5:
                    called = 'nam' + called;
                    break;
                case 6:
                    called = 'sau' + called;
                    break;
                case 7:
                    called = 'bay' + called;
                    break;
                case 8:
                    called = 'tam' + called;
                    break;
                case 9:
                    called = 'chin' + called;
                    break;
            }
            n = Math.floor(n / 10);
        }
        return called;
    };
    return FizzBuzzTranslate;
}());
exports.FizzBuzzTranslate = FizzBuzzTranslate;
