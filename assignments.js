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

// let productProperty = [
//     {
//         id: 1,
//         name: "Wireless Mouse MX3000",
//         category: "Computer Accessories",
//         description: "Ergonomic wireless mouse with 3 adjustable DPI settings.",
//         price: 30000
//     },
//     {
//         id: 2,
//         name: "64GB USB 3.0 Flash Drive",
//         category: "Storage Devices",
//         description: "High-speed USB flash drive with durable casing.",
//         price: 15000
//     },
//     {
//         id: 3,
//         name: "27-inch 4K Monitor",
//         category: "Displays",
//         description: "Ultra HD monitor ideal for graphic design and gaming.",
//         price: 380000
//     },
//     {
//         id: 4,
//         name: "Noise-Cancelling Headphones",
//         category: "Audio Equipment",
//         description: "Over-ear headphones with active noise cancellation feature.",
//         price: 90000
//     },
//     {
//         id: 5,
//         name: "Mechanical Keyboard MK-Pro",
//         category: "Computer Accessories",
//         description: "RGB backlit mechanical keyboard with customizable keys.",
//         price: 70000
//     },
//     {
//         id: 6,
//         name: "Wireless Travel Router",
//         category: "Networking",
//         description: "Compact router with VPN support and dual-band Wi-Fi.",
//         price: 45000
//     },
//     {
//         id: 7,
//         name: "External SSD 1TB",
//         category: "Storage Devices",
//         description: "Portable solid state drive with USB-C interface.",
//         price: 123000
//     },
//     {
//         id: 8,
//         name: "Laptop Cooling Pad",
//         category: "Computer Accessories",
//         description: "Cooling pad with 4 quiet fans and adjustable height.",
//         price: 22000
//     },
//     {
//         id: 9,
//         name: "Webcam 1080p HD",
//         category: "Video Conferencing",
//         description: "HD webcam with built-in microphone and low-light correction.",
//         price: 35000
//     },
//     {
//         id: 10,
//         name: "Bluetooth Speaker S15",
//         category: "Audio Equipment",
//         description: "Portable Bluetooth speaker with 10-hour battery life.",
//         price: 55000
//     }

// ];




//=====================NOTE=========================================
//Assignment 4 - Search with Include method and prompt function
//Search Assignment using include method and prompt
//user input is parsed as the search and returns the result in the console
//The search checks the arraay [productProperty] for the keyword entered into the prompt() by the user upon loading the page

//My CODE for search#########################################
// function search(result) {
//     for (let i = 0; i < productProperty.length; i++) {
//         if (productProperty[i].name.includes(result)) {
//             console.log(productProperty[i].name);
//         }
//     }
// }
// let result = prompt("search for product");
// search(result);
//#########################################################


//Modified version~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function search(result) {
//     let lowerResult = result.toLowerCase(); // convert search input to lowercase
//     for (let i = 0; i < productProperty.length; i++) {

//         // convert the product name to lowercase to ignore case when checking includes
//         if (productProperty[i].name.toLowerCase().includes(lowerResult)) {
//             console.log(`Product ID - ${productProperty[i].id} : ${productProperty[i].name}`);
//         }
//     }
// }
// let result = prompt("Search our inventory - we have: Speaker, Webcam, Laptop, ssd, Router, Keyboard ");
// search(result);




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



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

////Fxn classwork on Wednesday

// const products = [
//     {
//         id: 1,
//         name: "black bag",
//         price: 500,
//         description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//         id: 2,
//         name: "shoe",
//         price: 400,
//         description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//         id: 3,
//         name: "laptop",
//         price: 400000,
//         description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//         id: 4,
//         name: "Hp laptop",
//         price: 500000,
//         description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//         id: 5,
//         name: "bag",
//         price: 500,
//         description:
//             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
// ];

// function renderProduct() {
//     products.map((products) => {
//         console.log(products.name);
//     });
// }


// const product = products.map(function (products) {
//     return "I love " + products.name;
// });
// console.log(product);


/* Assignment // Create an array of objects,  have a multi dimentional array (maybe two), the array should be about student information. Inside the array, create a method that will display the student's info, create another method that will display the CGPA of the student - Display the courses and sort them (alphabetically in reverse Z-A) */





////////////////////////////////////////////////////////////////////////////////////////////////////////
// function myName() {
//     console.log("My name is Esija");
// }

// myName();
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Sample data: Array of students with name, gender, department, and courses with scores
// const studentsInfo = [
//     {
//         id: 1,
//         firstName: "Janet",
//         lastName: "Assibong",
//         gender: "Female",
//         department: "Statistics",
//         courses: [
//             { course: "MTH101", score: 85 },
//             { course: "PHY101", score: 78 },
//             { course: "CSC110", score: 92 }
//         ]
//     },
//     {
//         id: 2,
//         firstName: "Robert",
//         lastName: "Uche",
//         gender: "Male",
//         department: "Computer Science",
//         courses: [
//             { course: "MTH101", score: 65 },
//             { course: "PHY101", score: 72 },
//             { course: "CSC110", score: 60 }
//         ]
//     },
//     {
//         id: 3,
//         firstName: "Anita",
//         lastName: "Antnony",
//         gender: "Male",
//         department: "Computer Science",
//         courses: [
//             { course: "MTH101", score: 55 },
//             { course: "PHY101", score: 48 },
//             { course: "CSC110", score: 75 }
//         ]
//     },
//     {
//         id: 4,
//         firstName: "Temitope",
//         lastName: "Ilebiyi",
//         gender: "Female",
//         department: "Statistics",
//         courses: [
//             { course: "MTH101", score: 90 },
//             { course: "PHY101", score: 85 },
//             { course: "CSC110", score: 95 }
//         ]
//     },
//     {
//         id: 5,
//         firstName: "Hamed",
//         lastName: "Olaniyi",
//         gender: "Male",
//         department: "Computer Science",
//         courses: [
//             { course: "MTH101", score: 40 },
//             { course: "PHY101", score: 55 },
//             { course: "CSC110", score: 50 }
//         ]
//     }
// ];


// function courseGrade(score) {
//     let grade;
//     if (score >= 70 && score <= 100) {
//         grade = 'A';
//     } else if (score >= 60 && score <= 69) {
//         grade = 'B';
//     } else if (score >= 50 && score <= 59) {
//         grade = 'C';
//     } else if (score >= 45 && score <= 49) {
//         grade = 'D';
//     } else if (score >= 40 && score <= 44) {
//         grade = 'E';
//     } else if (score >= 0 && score <= 39) {
//         grade = 'F';
//     } else {
//         grade = 'Invalid score';
//     }
//     return grade;
// }

// const scores = [85, 67, 52, 48, 42, 35, 110, -5];

// studentsInfo.forEach(score => {
//     console.log(studentsInfo[0].firstName);
// });


// // Function to convert score to GPA using if-else statement
// function computeGPA(score) {
//     let gpa;
//     if (score >= 70) {
//         gpa = 4.0;
//     } else if (score >= 60) {
//         gpa = 3.0;
//     } else if (score >= 50) {
//         gpa = 2.0;
//     } else if (score >= 45) {
//         gpa = 1.0;
//     } else {
//         gpa = 0.0;
//     }
//     return gpa;
// }

// // Calculate CGPA for each student
// students.forEach(student => {
//     let totalGPA = 0;
//     for (let i = 0; i < student.courses.length; i++) {
//         totalGPA += computeGPA(student.courses[i].score);
//     }
//     student.cgpa = (totalGPA / student.courses.length).toFixed(2);
// });

// // Display students information
// console.log("Students Course Info and CGPA:");
// students.forEach(s => {
//     console.log(`Name: ${s.name}, Dept: ${s.department}, CGPA: ${s.cgpa}`);
//     s.courses.forEach(c => {
//         console.log(`  Course: ${c.course}, Score: ${c.score}, GPA: ${computeGPA(c.score)}`);
//     });
//     console.log('-----------------------');
// });


// Sample data: Array of students with name, gender, department, and courses with scores
const studentsInfo = [
    {
        id: 1,
        firstName: "Janet",
        lastName: "Adebayo",
        gender: "Female",
        department: "Statistics",
        courses: [
            { course: "MTH101", score: 85 },
            { course: "PHY101", score: 78 },
            { course: "CSC110", score: 92 }
        ]
    },
    {
        id: 2,
        firstName: "Robert",
        lastName: "Uche",
        gender: "Male",
        department: "Computer Sciemce",
        courses: [
            { course: "MTH101", score: 65 },
            { course: "PHY101", score: 72 },
            { course: "CSC110", score: 60 }
        ]
    },
    {
        id: 3,
        firstName: "Charles",
        lastName: "Mensah",
        gender: "Male",
        department: "Computer Science",
        courses: [
            { course: "MTH101", score: 55 },
            { course: "PHY101", score: 48 },
            { course: "CSC110", score: 75 }
        ]
    },
    {
        id: 4,
        firstName: "Anita",
        lastName: "Mgbachi",
        gender: "Female",
        department: "Statistics",
        courses: [
            { course: "MTH101", score: 90 },
            { course: "PHY101", score: 85 },
            { course: "CSC110", score: 95 }
        ]
    },
    {
        id: 5,
        firstName: "Temitope",
        lastName: "Ilebiyi",
        gender: "Male",
        department: "Computer Science",
        courses: [
            { course: "MTH101", score: 40 },
            { course: "PHY101", score: 55 },
            { course: "CSC110", score: 50 }
        ]
    }
];


function computeGPA(score) {
    let gpa;
    if (score >= 70) {
        gpa = 4.0;
    } else if (score >= 60) {
        gpa = 3.0;
    } else if (score >= 50) {
        gpa = 2.0;
    } else if (score >= 45) {
        gpa = 1.0;
    } else {
        gpa = 0.0;
    }
    return gpa;
}



studentsInfo.forEach(student => {
    let totalGPA = 0;
    for (let i = 0; i < student.courses.length; i++) {
        totalGPA += computeGPA(student.courses[i].score);
    }
    student.cgpa = (totalGPA / student.courses.length).toFixed(2);
});


//My sorting
studentsInfo.sort((x, y) => x.firstName.localeCompare(y.firstName));

console.log("List of students and grades per course");
studentsInfo.forEach(eachStudentData => {
    console.log(`${eachStudentData.firstName} ${eachStudentData.lastName} | Dept: ${eachStudentData.department} | CGPA: ${eachStudentData.cgpa}`);

    eachStudentData.courses.forEach(courseGrades => {
        console.log(`  Course: ${courseGrades.course} | Score: ${courseGrades.score} | GPA: ${computeGPA(courseGrades.score)}`);
    });
});
console.log(studentsInfo)

//////////////////////////////////////////////


// console.log("List of students and grades per course");
// studentsInfo.forEach(eachStudentData => {
//     console.log(`${eachStudentData.id}. Name: ${eachStudentData.firstName} ${eachStudentData.lastName} | Dept: ${eachStudentData.department} | CGPA: ${eachStudentData.cgpa}`);

//     eachStudentData.courses.forEach(courseGrades => {
//         console.log(`  Course: ${courseGrades.course} | Score: ${courseGrades.score} | GPA: ${computeGPA(courseGrades.score)}`);
//     });
// });

// studentsInfo.sort((a, b) => a.firstName.localeCompare(b.firstName));
// console.log(studentsInfo);

// studentsInfo.reverse((a, b) => a.name.localeCompare(b.name));
// console.log(studentsInfo);

// studentsInfo.sort(function (a, b) {
//     return a.firstName.localeCompare(b.firstName);
// });
// console.log(studentsInfo)