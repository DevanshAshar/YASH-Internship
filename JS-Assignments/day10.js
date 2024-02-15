function double(num) {
    return num * 2;
}
const numbers = [1, 2, 3, 4, 5];
Array.prototype.ourMap =function(cb){
    // console.log(cb)
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i]));
    }
    return newArray;
};
console.log(numbers.ourMap(double));
// find polyfill
Array.prototype.ourFind = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            return this[i];
        }
    }
    return undefined;
};
const found = numbers.ourFind((elem) => elem === 3);
console.log(found);
Function.prototype.ourBind = function(...args) {
    // console.log(args);
    const fn = this;
    return function(...innerArgs) {
        console.log(innerArgs[0])
        console.log(fn.apply(innerArgs[0],innerArgs))
    };
};
const boundFunction = double.ourBind(10);
boundFunction(5);