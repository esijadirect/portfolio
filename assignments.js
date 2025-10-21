//........................................................................................
//ASSIGNMENT 2 TIMES TABLE


// let num = prompt("Enter a number to build a multiplication table ***Numbers Only***");
// let length = prompt("Enter the length of the table:");


// console.log(`Multiplication Table for ${num} times table from 1 to ${length}:`);

// for (let i = 1; i <= length; i++) {
//     console.log(`${num} x ${i} = ${num * i}`); }


//Assignment 1
// const inputExpression = prompt('Enter a mathematical expression:');


// const result = eval(inputExpression);
// console.log('Answer is :', result);






//========NOTE======================================================================================
//Calculator Assignment
// let numberOne = prompt('Enter the first number:');
// let operator = prompt('Enter the operator (+, -, *, /):');
// let numberTwo = prompt('Enter the second number:');

// let result;

// if (operator === '+') {
//     result = Number(numberOne) + Number(numberTwo);
// } else if (operator === '-') {
//     result = Number(numberOne) - Number(numberTwo);
// } else if (operator === '*') {
//     result = Number(numberOne) * Number(numberTwo);
// } else if (operator === '/') {
//     if (numberTwo !== '0') {
//         result = Number(numberOne) / Number(numberTwo);
//     } else {
//         result = 'you cannot divide by zero - invalid maths';
//     }
// } else {
//     result = 'enter a valid maths operator';
// }

// console.log('the answer is:', result);
//=================================================================================================

/* ASSIGNMENT QUESTIONS----------------------------------------------------------------------------
 create an array of objects it will be  a 
 
 Productproperty - name, category, desc and price and will have an ID to differentiate them.

 use include method and prompt. (when you search on prompt let it display on the console)

 The array of objects should be ten (10)

 */


//========================
//  Arrays - Assignment 3
//========================

let productProperty = [
    {
        id: 1,
        name: "Wireless Mouse MX3000",
        category: "Computer Accessories",
        description: "Ergonomic wireless mouse with 3 adjustable DPI settings.",
        price: 30000
    },
    {
        id: 2,
        name: "64GB USB 3.0 Flash Drive",
        category: "Storage Devices",
        description: "High-speed USB flash drive with durable casing.",
        price: 15000
    },
    {
        id: 3,
        name: "27-inch 4K Monitor",
        category: "Displays",
        description: "Ultra HD monitor ideal for graphic design and gaming.",
        price: 380000
    },
    {
        id: 4,
        name: "Noise-Cancelling Headphones",
        category: "Audio Equipment",
        description: "Over-ear headphones with active noise cancellation feature.",
        price: 90000
    },
    {
        id: 5,
        name: "Mechanical Keyboard MK-Pro",
        category: "Computer Accessories",
        description: "RGB backlit mechanical keyboard with customizable keys.",
        price: 70000
    },
    {
        id: 6,
        name: "Wireless Travel Router",
        category: "Networking",
        description: "Compact router with VPN support and dual-band Wi-Fi.",
        price: 45000
    },
    {
        id: 7,
        name: "External SSD 1TB",
        category: "Storage Devices",
        description: "Portable solid state drive with USB-C interface.",
        price: 123000
    },
    {
        id: 8,
        name: "Laptop Cooling Pad",
        category: "Computer Accessories",
        description: "Cooling pad with 4 quiet fans and adjustable height.",
        price: 22000
    },
    {
        id: 9,
        name: "Webcam 1080p HD",
        category: "Video Conferencing",
        description: "HD webcam with built-in microphone and low-light correction.",
        price: 35000
    },
    {
        id: 10,
        name: "Bluetooth Speaker S15",
        category: "Audio Equipment",
        description: "Portable Bluetooth speaker with 10-hour battery life.",
        price: 55000
    }

];

//=====================NOTE=========================================
//Assignment 4 - Search with Include method and prompt function
//Search Assignment using include method and prompt
//user input is parsed as the search and returns the result in the console
//The search checks the arraay [productProperty] for the keyword entered into the prompt() by the user upon loading the page

function search(result) {
    for (let i = 0; i < productProperty.length; i++) {
        if (productProperty[i].name.includes(result)) {
            console.log(productProperty[i].name);
        }
    }
}
let result = prompt("search for product");
search(result);

//=======================NOTE====
//Destructure Array - Auto
//===========================

// for (let i = 0; i < productProperty.length; i++) {
//     console.log(`${productProperty[i].id} - ${productProperty[i].name} - ${productProperty[i].price}`);

//     //Displays order/cart summary
//     // console.log(`products order: ${productProperty[i].name} and price:# ${productProperty[i].price}`);
// }


//OR Destructure manually
// console.log(productProperty[0].name, productProperty[0].price);
// console.log(productProperty[1].name, productProperty[1].price);
// console.log(productProperty[2].name, productProperty[2].price);
// console.log(productProperty[4].name, productProperty[3].price);
// console.log(productProperty[3].name, productProperty[4].price);
// console.log(productProperty[5].name, productProperty[5].price);
// console.log(productProperty[6].name, productProperty[6].price);
// console.log(productProperty[7].name, productProperty[7].price);
// console.log(productProperty[8].name, productProperty[8].price);
// console.log(productProperty[9].name, productProperty[9].price);

