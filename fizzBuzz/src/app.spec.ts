import {FizzBuzzTranslate} from "./app";

describe('return FizzBuzz', function () {
    let fizzBuzz = new FizzBuzzTranslate();
    it('is FizzBuzz', function () {
        expect(fizzBuzz.traslate(15)).toBe('FizzBuzz')
    });

    it('is FizzBuzz', function () {
        expect(fizzBuzz.traslate(9)).toBe('Fizz')
    });

    it('is FizzBuzz', function () {
        expect(fizzBuzz.traslate(10)).toBe('Buzz')
    });

    it('is FizzBuzz', function () {
        expect(fizzBuzz.traslate(22)).toBe('22');
    });

    it('is FizzBuzz', function () {
        expect(fizzBuzz.traslate(23)).toBe('Fizz');
    });

    it('is FizzBuzz', function () {
        expect(fizzBuzz.traslate(51)).toBe('Buzz');
    });

    it('call number', function (){
        expect(fizzBuzz.callNumber(1234)).toBe('mothaibabon');
    })

});