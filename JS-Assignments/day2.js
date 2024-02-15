function generateOutput(personInput) {
    let country = personInput.country ? personInput.country.toUpperCase() : '';
    let output = `{{${personInput.name}}} ${personInput.surname} is {{${personInput.age}}} years old and ${
        (country === 'INDIA' ? 'belongs ' : 'does not belong ')+'to India'
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

let inputSentence1 = "My name is Salman";
let match1 = inputSentence1.match(/Salman/i);
let matchedWord = match1 ? match1[0] : null;
console.log(matchedWord)

let inputSentence2 = "My age is 20 what is yours?";
let match2 = inputSentence2.match(/20/);
let matchedWord1= match2 ? match2[0] : null;
console.log(matchedWord1)

let inputSentence3 = "my employee id is EN123 I work at Yash";
let match3 = inputSentence3.match(/EN123/);
let matchedWord2= match3 ? match3[0] : null;
console.log(matchedWord2)

let inputString = "Hiy you ari not Robot";
let replacedString = inputString.replace(/i/g, 'e');
console.log(replacedString);