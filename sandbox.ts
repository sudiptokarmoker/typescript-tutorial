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

