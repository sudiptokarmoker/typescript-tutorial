import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// this above and bellow is same effect
//let docOne;
//let docTwo;
//docOne = new Invoice('yoshi', 'web work', 250);
//docTwo = new Payment('luigi', 'plumbing work', 200);
//let docs: HasFormatter[] = [];
//docs.push(docOne);
//docs.push(docTwo);
//console.log(docs);
// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 300);
// video no: 11
// topics: The DOM and Type Casting
//const form = document.querySelector('.new-item-form')!;
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Tutorial No: 12
// TypeScript Tutorial #12 - Classe
// topics: classes
