export class AbsoluteNumberCalculator {
    public static findAbsolute(num: number): number {
        // throw new Error("Unsupported Operation Exception");
        if(num < 0)
            return  -num;
        return num;
    }
}