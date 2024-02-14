function generateOutput(personInput) {
    let country = personInput.country ? personInput.country.toUpperCase() : '';
    let belongsToIndia = country === 'INDIA';
    let output = `{{${personInput.name}}} ${personInput.surname} is {{${personInput.age}}} years old and ${
      belongsToIndia ? 'belongs to India' : 'does not belong to India'
    }`;  
    return output;
}
let personInput = { "name": "Clark", "surname": "Kent", "age": "36", "country": "India" };
console.log(generateOutput(personInput));
personInput.country = "USA";
console.log(generateOutput(personInput));

function print(){
    var a=10
    console.log(a)
    var c=5
    console.log(c)
}
print()

function a(){
    console.log('hello')
}
a()
var a=10

let inputSentence = "My name is Salman";
let match = inputSentence.match(/\bis\b\s+(\w+)/i);
let wordAfterIs = match ? match[1] : null;
console.log(wordAfterIs);

let inputString = "Hiy you ari not Robot";
let replacedString = inputString.replace(/i/g, 'e');
console.log(replacedString);