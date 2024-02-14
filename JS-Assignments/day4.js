//C
function Animal(...animals) {
    console.log(`Animal kingdom has ${animals.join(', ')}`);
}
Animal("Lion", "Tiger", "Dog");
//D
let AnimalArrow = (...animals) => {
    console.log(`Animal kingdom has ${animals.join(', ')}`);
};
AnimalArrow("Lion", "Tiger", "Dog");
//E
function outerFunction() {
    let value = "Mobile";
    function innerFunction(newValue) {
        console.log("Old value:", value);
        value = newValue;
        console.log("New value:", value);
    }
    innerFunction('Laptop')
}
outerFunction()
//G
function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        };
    };
}
console.log(multiply(2)(3)(4));