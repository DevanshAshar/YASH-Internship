//a
const sampleText = 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe.'
let arr= sampleText.split(/\s+/);
console.log(arr);
//b
let capitalizedArray = arr.map(word => word.toUpperCase());
console.log(capitalizedArray);
let capitalWords = arr.filter(word => word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90);
console.log(capitalWords);
//c
let lowerCase = arr.filter(word => word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122);
console.log(lowerCase);
//d
let firstLetterArray = arr.map(word => word.charAt(0));
console.log(firstLetterArray);
//e
function wordStart(arrayOfWords, character) {
    let filteredWords = arrayOfWords.filter(word => word.charAt(0).toLowerCase() === character.toLowerCase()); 
    return filteredWords;
}
let result = wordStart(arr, 'm');
console.log(result);
//f
let ct=0
let character='t'
for (let x in arr) 
{
    if (arr[x].charAt(0).toLowerCase() === character.toLowerCase()) 
    ct++
}
console.log(ct)
//g
let input = "Hello there";
let charCount = {};
let lowercase = input.toLowerCase();
for (let i = 0; i < lowercase.length; i++) {
  let char = lowercase.charAt(i);
  charCount[char] = (charCount[char] || 0) + 1;
}
console.log(charCount);
//exercise 2
let a = 10; 
console.log("a =", a);
a += 5; 
console.log("a += 5:", a); 
a -= 3;
console.log("a -= 3:", a);
a *= 2; 
console.log("a *= 2:", a); 
a /= 4; 
console.log("a /= 4:", a); 
a %= 5; 
console.log("a %= 5:", a); 
a <<= 2; 
console.log("a <<= 2:", a); 
a >>= 1; 
console.log("a >>= 1:", a); 
a >>>= 1; 
console.log("a >>>= 1:", a); 
a &= 0; 
console.log("a &= 0:", a); 
a ^= 3; 
console.log("a ^= 3:", a); 
a |= 8; 
console.log("a |= 8:", a); 
a **= 2; 
console.log("a **= 2:", a); 
