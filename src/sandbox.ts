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

const add = (a: number, b: number|string) => {
    //console.log(a + b);
}