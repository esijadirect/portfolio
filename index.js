// console.log("Hello World");

// Inline Javascript


//  let a = 10;
//         let b = 20;
//         console.log(a + b);
//         console.log("The sum of a and b is: " + (a+b));


// let myContainer = document.getElementById("container");
// myContainer.style.backgroundColor = "red";


// const g = 9.81;
// // reassigning g = 12; will cause an error

// console.log(g);

// let esija = 12;
// esija = 344;

// document.write(esija);
// console.log(esija);


//While Loop
// while loop
// let i = 1;
// let n = 5;

// while (i <= n) {
//   console.log(`The number is: ${i}`);
//   i += 1;
// }

// let sum = 0;
// for (let i = 1; i <=10; i++) {
//   console.log(i);
//   sum += i;
// }
//   console.log(sum);



// for (let i = 1; i <=20; i++) {
//   if (i % 2 === 0) {
//         console.log(i + "is even");

//   }

//   else {
//     console.log(i + " is odd")
//   }

// }

//Multiplication Table of 2 X 12

// let num = 2;
// console.log("Multiplication of " + num);

// //when you declare a variable outside, you can use it inside

// for (let i = 1; i <= 12; i++) {
//     console.log(num * i);
// }


// function multi(num){
//     for (let i = 1; i <= 12; i++){
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }
// multi(2);
// multi(3);


// function square(length){
//     return length * length;
// }

// let myNum = square(4);
// console.log(myNum);


// let num = 10;
// let sum = num + myNum;
// console.log(sum);



// const course = "Javascript";
// if (course === "Java") {
//     book = "Programming"

// }

// else {

//     book = "Others";
// }

// console.log(book);

// Small calculator using prompt() and console.log()





//Assignment 1

// Prompt the user for an arithmetic expression
// let userInput = prompt("Enter a simple arithmetic expression (e.g., 5 + 3 * 2):");

// // Validate input
// if (userInput === null || userInput.trim() === "") {
//     console.log("No input provided.");
// } else {
//     try {
//         // Allow only numbers, spaces, and basic operators (+ - * / .)
//         if (/^[0-9+\-*/().\s]+$/.test(userInput)) {
//             // Evaluate the expression
//             let result = Function('"use strict"; return (' + userInput + ')')();
//             console.log(`Result: ${result}`);
//         } else {
//             console.log("Invalid input. Only numbers and + - * / ( ) are allowed.");
//         }
//     } catch (error) {
//         console.log("Error evaluating expression:", error.message);
//     }
// }

// const PI = 3.1415;
// console.log(PI);

// let x = 100;
// x++;
// console.log(x);

// x--;
// x--;
// console.log(x);
// x += 1;
// console.log(x);

// const now = 2025;
// let esijaAge = now - 1985;
// let anitaAge = now - 2001;

// console.log(`Anita is younger than Esija: ${anitaAge < esijaAge}`);

// console.log(anitaAge >= 18);
// console.log(typeof anitaAge);

// const averageAge = (esijaAge + anitaAge) / 2;
// console.log(averageAge);


// const BMI = mass / height ** 2;

// let markMass = 95;
// let markHeight = 1.88;

// let johnMass = 85;
// let johnHeight = 1.76;

// const unitMass = "kg";
// const unitHeight = "m";

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;

// console.log("Mark's BMI is: " + markBMI);
// console.log("John's BMI is: " + johnBMI);
// console.log("Mark has a higher BMI: " + markHigherBMI);

// console.log(typeof (markHigherBMI));


// console.log(`String
// with
// multiplle lines`)

// const age = 15;

// const canDrive = age >= 18;

// if (canDrive) {
//     console.log("Can start driving lessons");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You are not up to the age of driving. Wait another ${yearsLeft} year(s)`);

// }


//a variable declared inside a code block can only be accessed with that codeblock.

//To access it, you must declare it at the begining of the code (before the code block)


//IF ELSE Challenge with BMI example

// let markMass = 95;
// let markHeight = 1.88;

// let johnMass = 85;
// let johnHeight = 1.76;


//Coding challenge 2
// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;


// const unitMass = "kg";
// const unitHeight = "m";

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;

// console.log("Mark's BMI is: " + markBMI);
// console.log("John's BMI is: " + johnBMI);
// console.log("Mark has a higher BMI: " + markHigherBMI);

// console.log(typeof (markHigherBMI));


// if (markHigherBMI) {
//     console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI} 😊`);
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}😒`);
// }

//Data 1 CHALLENGE 3
// const dolphinsAvgScore = (96 + 108 + 89) / 3;
// const koalasSavgScore = (88 + 91 + 110) / 3;

// Data Bonus 1:
// const dolphinsAvgScore = (97 + 112 + 101) / 3;
// const koalasSavgScore = (109 + 95 + 123) / 3;

// Data Bonus 2:

// const dolphinsAvgScore = (101 + 113 + 100) / 3;
// const koalasSavgScore = (99 + 110 + 106) / 3;

// const dolphinMinScore = dolphinsAvgScore >= 100;
// const koalaMinScore = koalasSavgScore >= 100;

// console.log(`Dolphins Score: ${dolphinsAvgScore} | Koalas Score: ${koalasSavgScore}`)

// if (dolphinsAvgScore > koalasSavgScore && dolphinMinScore) {
//     console.log(`Team Dolphin wins with an average score of: ${dolphinsAvgScore}`);
// } else if (dolphinsAvgScore > koalasSavgScore && !dolphinMinScore) {
//     console.log("Score does not meet the minimum requirements for victory");
// } else if (dolphinsAvgScore < koalasSavgScore && !koalaMinScore) {
//     console.log("Score does not meet the minimum requirements for victory");
// } else if (dolphinsAvgScore < koalasSavgScore && koalaMinScore) {
//     console.log(`Team Koala wins! with a score of: ${koalasSavgScore}`);
// } else if (dolphinsAvgScore === koalasSavgScore && dolphinMinScore) {
//     console.log("Draw!");
// } else {
//     console.log("Draw! but Minimum score NOT achieved");
// }

//Switch statemets
// const day = 'Friday';

// switch (day) {
//     case 'monday':
//         console.log('You have to be at work today');
//         break;
//     case 'Wednesday':
//     case 'Friday':
//         console.log('You have to be at work today');
//         break;

//     default:
//         console.log('You may stay home today');
// }

// let day = 'Thursday';

// let presntDay = day;
// console.log(presntDay);

// if (presntDay === 'Monday') {
//     console.log('You have to be at work today');

// } else if (presntDay === 'Wednesday') {
//     console.log('You have to be at work today');

// } else if (presntDay === 'Friday') {
//     console.log('You have to be at work today');

// } else {
//     console.log('You may stay home today');
// }

// Assignment 1

// Prompt the user for an arithmetic expression

// let userInput = prompt("Enter a simple maths expression");


// if (userInput === null) {
//     console.log("No input provided.");

// } else {
//     try {

//         if (/^[0-9+\-*/().\s]+$/.test(userInput)) {

//             let result = Function('"use strict"; return (' + userInput + ')')();
//             console.log(`Result: ${result}`);
//         } else {
//             console.log("Invalid input. Only numbers and + - * / ( ) are allowed.");
//         }
//     } catch (error) {
//         console.log("Error evaluating expression:", error.message);
//     }
// }


// const inputExpression = prompt('Enter a mathematical expression:');


// const result = eval(inputExpression);
// console.log(`Answer is : ${result}`);


// let numberOne = 2;
// let numberTwo = 4;
// let numberThree = 7;

// console.log(`The numbers are: ', numberOne, numberTwo, numberThree`)

// Prompt the user to enter the multiplication table number
// let num = prompt("Enter the multiplication table you want to build:");

// // Prompt the user to enter the length of the table
// let length = prompt("Enter the length of the table:");

// // Convert inputs to integers
// num = parseInt(num);
// length = parseInt(length);

// // Validate inputs
// if (isNaN(num) || isNaN(length) || num <= 0 || length <= 0) {
//     console.log("Please enter valid positive integers for both the multiplication table and the length.");
// } else {
//     console.log(`Multiplication Table for ${num} up to length ${length}:`);
//     for (let i = 1; i <= length; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }



// let num = prompt("Enter the multiplication table you want to build: eg 2,4,5.. Please enter numbers only");
// let length = prompt("Enter the length of the table:");


// num = Number(num);
// length = Number(length);


// console.log(`Multiplication Table for ${num} times table up to ${num} x ${length}:`);

// for (let i = 1; i <= length; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }


// let message = (num >= 10 && num <= 20) ? "Within range" : "Outside range";
// console.log(message);

// let num = 25;
// let result = (num < 10) ? "Too low" :
//     (num >= 10 && num <= 20) ? "Within range" :
//         "Too high";
// console.log(result);

//Tip Calculator

// let tip;
// const bill = 70;
// let totalBill;

// tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;



// if (bill >= 50 && bill <= 300) {
//     tip = 0.15 * bill;

// } else {
//     tip = 0.2 * bill;
// }


//........................................................................................
//ASSIGNMENT 2


// let num = prompt("Enter a number to build a multiplication table ***Numbers Only***");
// let length = prompt("Enter the length of the table:");


// console.log(`Multiplication Table for ${num} times table from 1 to ${length}:`);

// for (let i = 1; i <= length; i++) {
//     console.log(`${num} x ${i} = ${num * i}`); }


//Assignment 1
// const inputExpression = prompt('Enter a mathematical expression:');


// const result = eval(inputExpression);
// console.log('Answer is :', result);






//.........................................................
//Objects

// const student = {

//     firstName: "Sito",
//     lastName: "Tobi",
//     course: "Computer Science",
//     matricNo: "CS1012025",
//     faculty: "Sciences",
//     marks: {

//         maths101: 70,
//         Eng101: 85,
//         CSC101: 75,
//     },

//     totalGPA: function () {


//         return "Hello";

//     }
// }


// console.log(`I am ${student.firstName} . My matric number is ${student.matricNo}`);

// console.log(`I am ${student["firstName"]} . My matric number is ${student["matricNo"]}`);

// console.log(`Your score in CSC101 is ${student.marks.CSC101}`);


// console.log(student.totalGPA());


//Destructuring

// const person = {
//     name: "Sara",
//     age: 25,
//     gender: "female",
// };

// let name = person.name;
// let age = person.age;
// let gender = person.gender;


// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female


// const person = {
//     name: "Sara",
//     age: 25,
//     gender: "female",
// };

// destructuring assignment

// const person = {
//     name: "Sara",
//     age: 25,
//     gender: "female",
// };

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female


// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female



//Destructure

// const products = [
//     {
//         id: 1,
//         name: "bag",
//         price: 500,
//         description: "Product one",
//     },
//     {
//         id: 2,
//         name: "shoe",
//         price: 400,
//         description: "Product two"
//     },
//     {
//         id: 3,
//         name: "laptop",
//         price: 400000,
//         description: "Product three",
//     },
//     {
//         id: 4,
//         name: "Hp laptop",
//         price: 500000,
//         description: "Product four",
//     },

//     {
//         id: 5,
//         name: "Apple iPhone",
//         price: 650000,
//         description: "Product five",
//     },

//     {
//         id: 6,
//         name: "BYD SUV",
//         price: 6500000,
//         description: "Product six",
//     },
//     {
//         id: 7,
//         name: "Oraimo Power Bank",
//         price: 38000,
//         description: "Product seven",
//     },
//     {
//         id: 8,
//         name: "Apple Air tags",
//         price: 224000,
//         description: "Product 8",
//     },
//     {
//         id: 9,
//         name: "Bluetooth Headphones",
//         price: 150000,
//         description: "Product nine",
//     },
//     {
//         id: 10,
//         name: "Hp laptop Charger",
//         price: 25000,
//         description: "Type C Charger",
//     },
// ];


// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].name);

//     console.log(`products order: ${products[i].name} and price:# ${products[i].price}`);
// }


// let school = "This is our training centre";
// console.log(school.startsWith("is"));

//Classwork
// let text = "Apple, Banana, Kiwi";
// let part1 = text.slice(-2);
// console.log(part1);

// let str = "Apple, Banana, Kiwi"; //Ignores any value less than 1. If you enter a value less than 1, it still displays the entire text
// let part = str.substring(3);
// console.log(part);

// let x = "I love javascript";
// let val = x.replace("javascript", "PHP");
// console.log(val);

// let xx = "     Google   ";
// let valx = xx.trim();
// console.log(valx);

// let textx = "HELLO WORLD";
// let charx = textx.charAt(0);
// console.log(charx);

// let strx = "Welcome to Qatar.";
// let checkx = strx.includes("Qatar");
// console.log(checkx);

//...............................................................................................
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


/* 
 create an array of objects it will be  a 
 
 Productproperty - name, category, desc and price and will have an ID to differentiate them.

 use include method and prompt. (when you search on prompt let it display on the console)

 The array of objects should be ten (10)

 */

//  Arrays - Assignment 3

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

//Destructure Auto

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

