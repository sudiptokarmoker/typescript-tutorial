var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// function
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 35;
