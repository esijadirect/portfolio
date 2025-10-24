//Sorting Linear Arrays (Strings):

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
// Output: ["Apple", "Banana", "Mango", "Orange"]


//Sorting Linear Arrays (Numbers)
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);
// Output: [1, 5, 10, 25, 40, 100]

//Sorting a Multidimensional Array (Array of Objects) by a Property


const studentsInfo = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 23 }
];

// Sort by name alphabetically
studentsInfo.sort((a, b) => a.name.localeCompare(b.name));
console.log(studentsInfo);
/* Output:
[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 23 }
]
*/

// Sort by age numerically
studentsInfo.sort((a, b) => a.age - b.age);
console.log(studentsInfo);
/* Output:
[
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 23 },
  { name: "Alice", age: 25 }
]
*/
