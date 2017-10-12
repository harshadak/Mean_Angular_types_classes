let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array < number > = [1, 2, 3, 4];
let myObj = {
    name: "Bill"
};
let anythinVariable: any = "Hey";
anythinVariable = 25;
let arrayOne: Array < boolean > = [true, false, true, true];
let arrayTwo: Array < any > = [1, 'abc', true, 2];
let myObj1 = {
    x: 5,
    y: 10
};
class MyNode {
    val: number;
    private _priv: number;

    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}
const myNodeInstance: MyNode = new MyNode(1);

function myFunction(): void {
    console.log("Hello World");
    return;
}

function sendingErrors(): never {
    throw new Error('Error message');
}
