import {TriangleClassifier} from "./app";

describe("phan loai tam giac", () => {
    let triangle = new TriangleClassifier();
    test('perfect Triangle', () => {
        let a = 2;
        let b = 2;
        let c = 2;
        expect(triangle.triangleClass(a,b,c)).toBe("tam giac deu");
    })

    test('perfect Triangle', () => {
        let a = 2;
        let b = 2;
        let c = 3;
        expect(triangle.triangleClass(a,b,c)).toBe("tam giac can");
    })

    test('tam giac vuong', () => {
        let a = 3;
        let b = 4;
        let c = 5;
        expect(triangle.triangleClass(a,b,c)).toBe("tam giac vuong");
    })

    test('check Triangle', () => {
        let a = 8;
        let b = 2;
        let c = 3;
        expect(triangle.triangleClass(a,b,c)).toBe("khong phai tam giac");
    })

    test('check Triangle', () => {
        let a = -1;
        let b = 2;
        let c = 1;
        expect(triangle.triangleClass(a,b,c)).toBe("khong phai tam giac");
    })

    test('check Triangle', () => {
        let a = 0;
        let b = 1;
        let c = 1;
        expect(triangle.triangleClass(a,b,c)).toBe("khong phai tam giac");
    })

})