"use strict";
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
// function
var circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 35;
let mixed = [];
mixed.push("apple");
mixed.push("bananna");
mixed.push(22);
let uid;
uid = '123';
uid = 14711;
let ninjaOne;
ninjaOne = {
    one: true,
    two: 'yes'
};
ninjaOne = {
    three: "yes",
    four: "here"
};
let ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColor: "black"
};
let age = 25;
console.log(age);
age = true;
console.log(age);
age = { name: "hello", id: 1233 };
console.log(age);
let mixedNew = [];
mixedNew.push(true);
console.log(mixedNew);
mixedNew.push("Sudipto");
console.log(mixedNew);
console.log("hello world, i would overcome this sitation sure soon");
let greet;
greet = () => {
    console.log("hello i am here function");
};
const add = (a, b) => {
    //console.log(a + b);
};
const logDetails = (uid, item) => {
    console.log(`${item} has an uid ${uid}`);
};
const greetNew = (user) => {
    console.log(`${user.name} says hello`);
};
// video no : 10
// topics : Function Signatures
// this is just function signature that means that have to follow this rules like this
let greetFunction;
greetFunction = (first, second) => {
    console.log(first + ' ' + second);
};
greetFunction("hello", "world");
// exmple 2 
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === 'add') {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
// in the above example if we remove the else block it would show the error becuase if action value is not === add then it can show the error there
let logDetailsNew;
logDetailsNew = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
// video no: 11
// topics: The DOM and Type Casting
//const form = document.querySelector('.new-item-form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Tutorial No: 12
// TypeScript Tutorial #12 - Classe
// topics: classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
// now calling the Invoice method here
const invOne = new Invoice('Mario', 'work on mario website', 250);
// now print the value
let invoices = [];
invoices.push(invOne);
