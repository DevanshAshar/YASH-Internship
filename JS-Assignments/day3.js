var student = {
    name: 'Arjun',
    location: 'VI',
    empid: 12
};
//1
console.log("Object before deleting empID property:", student);
delete student.empid;
console.log("Object after deleting empID property:", student);
//2
console.log("Length of the object:", Object.keys(student).length);

// 3
student['Key Skills'] = 'UI';
console.log(student);

// 4
let name = student.name;
let subsets = [];
for (let i = 0; i <= name.length; i++) {
    for (let j = i + 1; j <= name.length; j++) {
        subsets.push(name.slice(i, j));
    }
}
console.log("Subsets of the name:", subsets);

// 5
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

var stringVal = 'textValue';
console.log("Reversed string:", stringVal.reverse());

// 6
class Shape {
    constructor() {}
    area() {
        return 0; 
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

let rectangle = new Rectangle(5, 10);
console.log("Area of Rectangle:", rectangle.area());

let circle = new Circle(7);
console.log("Area of Circle:", circle.area());
