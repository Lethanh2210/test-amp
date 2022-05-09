export class TriangleClassifier{
    triangleClass(a: number,b: number,c: number){
        if(!(a+b >c && b+c>a && c+a>b)){
            return "khong phai tam giac";
        }

        if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
            return "tam giac vuong";
        }

        if(a === b && b === c){
            return "tam giac deu";
        }

        if(a===b){
            return "tam giac can";
        }



    }

}
