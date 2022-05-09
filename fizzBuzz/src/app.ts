export class FizzBuzzTranslate{
    traslate(n: number){

        let isFizz = n % 5 == 0;
        let isBuzz = n % 3 == 0;

        if (isBuzz && isBuzz) {
            return 'FizzBuzz';
        } else if (isFizz) {
            return 'Fizz';
        } else if(isBuzz) {
            return 'Buzz';
        } else {
            if(this.checkDiv3(n)){
                return 'Fizz';
            }else if(this.checkDiv5(n)){
                return 'Buzz';
            }
            return n + '';
        }

    }

    checkDiv3(n: number){
        while(n!==0){
            if(n%10===3){
                return true;
            }
            n = Math.floor(n / 10);
        }
        return false;
    }

    checkDiv5(n: number){
        while(n !==0){
            if(n%10===5){
                return true;
            }
            n = Math.floor(n / 10);
        }
        return false;
    }

    callNumber(n: number){
        let k = 0;
        let called: string ='';
        while(n !== 0){
            k = n%10;
            switch (k){
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
    }
}