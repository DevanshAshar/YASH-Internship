//a
function fn() {
    {
        let a= "let";
        const b = "const ";
        console.log(a);
        console.log(b); 
    }
    // console.log(a); //err
    // console.log(b); //err
}
fn();
//b
function generateMessage(name1, name2, name3) {
    return `${name1} ${name2} and ${name3} are UI Developers at Yash Technologies.`;
}
console.log(generateMessage("Vijaya", "Sujal", "Lokesh"));
//c
let temp = {name1: "Vijaya", name2: "Sujal", name3: "Lokesh"};
let {name1, name2, name3} = temp;
console.log(name1);
console.log(name2);
console.log(name3);
//d
let myMap = new Map();
myMap.set('apple', 500);
myMap.set('banana', 300);
myMap.set('grape', 200);
let value1 = myMap.get('apple');
let value2 = myMap.get('banana');
let value3 = myMap.get('grape');
console.log(value1); 
console.log(value2);
console.log(value3); 
//e
let mySet = new Set();
mySet.add('apple');
mySet.add('banana');
console.log(mySet.size);
//f
console.log(isFinite(1/100000))
//g
console.log(isNaN("Vijaya"))
console.log(isNaN(10))