const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
})
// function
var circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(7.5));

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 35;

let mixed: (string|number|boolean)[] = [];

mixed.push("apple");
mixed.push("bananna");
mixed.push(22);

let uid: string|number;
uid = '123';
uid = 14711;

let ninjaOne: object;

ninjaOne = {
    one: true,
    two: 'yes'
}

ninjaOne = {
    three: "yes",
    four: "here"
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: "mario",
    age: 20,
    beltColor: "black"
}

let age: any = 25;
console.log(age);
age = true; 
console.log(age);
age  = {name: "hello", id: 1233};
console.log(age);

let mixedNew: any[] = [];

mixedNew.push(true);
console.log(mixedNew);
mixedNew.push("Sudipto");
console.log(mixedNew);


console.log("hello world, i would overcome this sitation sure soon");

let greet: Function;

greet = () => {
    console.log("hello i am here function");
}

const add = (a: number, b: number|string) : void => {
    //console.log(a + b);
}

//  videio no : 9
// type alias
type StringOrNumber = string | number;
type objWithName = { name: string, uid: StringOrNumber }

const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has an uid ${uid}`);
}

const greetNew = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}
// video no : 10
// topics : Function Signatures
// this is just function signature that means that have to follow this rules like this
let greetFunction: (a : string, b: string) => void;
greetFunction = (first: string, second: string) => {
    console.log(first + ' ' + second);
}
greetFunction("hello", "world");
// exmple 2 
let calc: (a: number, b: number, c: string) => number;
calc = (numberOne: number, numberTwo: number, action: string) => {
    if(action === 'add'){
        return numberOne + numberTwo
    } else {
        return numberOne - numberTwo;
    }
}
// in the above example if we remove the else block it would show the error becuase if action value is not === add then it can show the error there
let logDetailsNew: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};
logDetailsNew = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
// video no: 11
// topics: The DOM and Type Casting
//const form = document.querySelector('.new-item-form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
 const type = document.querySelector('#type') as HTMLSelectElement;
 const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
 const details = document.querySelector('#details') as HTMLInputElement;
 const amount = document.querySelector('#amount') as HTMLInputElement;

 form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
 })

 // Tutorial No: 12
 // TypeScript Tutorial #12 - Classe
// topics: classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
// now calling the Invoice method here
const invOne = new Invoice('Mario', 'work on mario website', 250);
// now print the value
let invoices: Invoice[] = [];
invoices.push(invOne);