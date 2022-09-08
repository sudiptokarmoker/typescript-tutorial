import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
 const type = document.querySelector('#type') as HTMLSelectElement;
 const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
 const details = document.querySelector('#details') as HTMLInputElement;
 const amount = document.querySelector('#amount') as HTMLInputElement;

 form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
 })

 // Tutorial No: 12
 // TypeScript Tutorial #12 - Classe
// topics: classes