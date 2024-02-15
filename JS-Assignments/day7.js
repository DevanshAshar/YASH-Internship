"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//1
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.display = function () {
        console.log("This is a ".concat(this.name, "."));
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, 'Rectangle') || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(5, 3);
rectangle.display();
console.log("Area: ".concat(rectangle.area()));
//2
var str = "Hello World";
console.log(str);
var num = 18;
console.log(num);
var ar = [1, 2, 3, 4, 5];
console.log(ar);
var obj = { name: "John", age: 30 };
console.log(obj);
//3
var Space = /** @class */ (function () {
    function Space(name, milesPerKilometer) {
        this.name = name;
        this.milesPerKilometer = milesPerKilometer;
    }
    return Space;
}());
var space1 = new Space("Spc", 18);
console.log(space1);
//4
var empName = "Vijaya";
var empDep = "UI";
var op = "".concat(empName, " works for ").concat(empDep, " department.");
console.log(op);
//5
var module_1 = require("./module");
var addObj = new module_1.Addition();
var subObj = new module_1.Subtraction();
var resultSum = addObj.sum(5, 3);
console.log("Sum:", resultSum);
var resultSubtract = subObj.subtract(5, 3);
console.log("Subtraction:", resultSubtract);
