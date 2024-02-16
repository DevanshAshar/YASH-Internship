let myVariable: object | null;
myVariable = {}; 
myVariable = null;

//3
type Type1 = {
    name: string;
    age: number;
};

type Type2 = {
    gender: string;
    country: string;
};
type CombinedType = Type1 | Type2 | (Type1 & Type2);
const obj1: Type1 = { name: 'John', age: 30 };
const obj2: Type2 = { gender: 'Male', country: 'USA' };
const obj3: CombinedType = { name: 'Alice', age: 25, gender: 'Female', country: 'UK' };

console.log(obj1);
console.log(obj2); 
console.log(obj3);

//4
type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyRequired<T> = { [K in keyof T]-?: T[K] };
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
type User = {
    name: string;
    age: number;
    email: string;
};
const partialUser: MyPartial<User> = { name: 'Devansh' };
const requiredUser: MyRequired<User> = { name: 'Devansh', age: 21, email: 'ashar.devansh@gmail.com' };
const readonlyUser: MyReadonly<User> = { name: 'Dev', age: 20, email: 'dev@gmail.com' };

console.log(partialUser);
console.log(requiredUser);
console.log(readonlyUser); 
