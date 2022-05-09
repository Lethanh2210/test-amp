export class NextDayCalculator{
    public checkLeapYear(year: number): boolean{
        let isLeapyear = false;
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    isLeapyear = true;
                }
            } else {
                isLeapyear = true;
            }
        }
        return isLeapyear;
    }

    public checkDayOfMonth(month: number,year: number): number{
        let day: number = 0;
        switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day = 30;
                break;
            case 2:
                if(this.checkLeapYear(year)){
                    day = 29;
                    break;
                }else {day = 28;}
                break;
        }
        return day;
    }

    public calculatorNextDay(day: number, month : number, year: number): string{
        if(month === 12){
            if(day < 31){
                day++;
            }else{
                day = 1;
                month = 1;
                year++;}
        }else {
            if(day === this.checkDayOfMonth(month,year)){
                day = 1;
                month++;
            }else day++;
        }
        return `${day}, ${month}, ${year}`;
    }

}