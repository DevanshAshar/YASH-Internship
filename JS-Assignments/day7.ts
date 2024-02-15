//1
class Shape {
    constructor(public name: string) {}
    display(): void {
        console.log(`This is a ${this.name}.`);
    }
}
class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super('Rectangle');
    }

    area(): number {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(5, 3);
rectangle.display();
console.log(`Area: ${rectangle.area()}`);
//2
let str: string = "Hello World";
console.log(str);
let num: number = 18;
console.log(num);
let ar: number[] = [1, 2, 3, 4, 5];
console.log(ar);
let obj: { name: string, age: number } = { name: "John", age: 30 };
console.log(obj);
//3
class Space {
    private milesPerKilometer: number;
    private name: string;

    constructor(name: string, milesPerKilometer: number) {
        this.name = name;
        this.milesPerKilometer = milesPerKilometer;
    }
}
let space1 = new Space("Spc", 18);
console.log(space1);
//4
let empName: string = "Vijaya";
let empDep: string = "UI";
let op: string = `${empName} works for ${empDep} department.`;
console.log(op);
//5
import { Addition, Subtraction } from './module';
let addObj = new Addition();
let subObj = new Subtraction();
let resultSum = addObj.sum(5, 3);
console.log("Sum:", resultSum); 
let resultSubtract = subObj.subtract(5, 3);
console.log("Subtraction:", resultSubtract);