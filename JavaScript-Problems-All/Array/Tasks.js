// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

// --------------------------ans-----
// const fruits = ["apple", "banana", "lichi", "orange", "dragon"];
// console.log(fruits[3]);
// fruits[2] = "jambura";
// console.log(fruits);

// Task-2
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

// ------ans------
// const destination = ["kuyakata", "bandorban", "sitakundo"];
// destination.push("himchori");
// destination.push("coxs-bazar", "cenmartin");
// destination.pop();
// console.log(destination);

// Task-3
// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

// -------ans-----
// const books = ["C++", "Python", "javascript", "java"];
// if (books.includes("javascript")) {
//   console.log("Here is the book");
// } else {
//   console.log("Book is not found");
// }

// Task-4
// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

// --------ans------
// const array = [];
// const array2= [1,2,32];
// const array3 = 'array'

// if(Array.isArray(array)){
//     console.log('This is an array');
// }else{
//     console.log('This is not an array');
// }

// if(Array.isArray(array2)){
//     console.log('This is an array');
// }else{
//     console.log('This is not an array');
// }
// if(Array.isArray(array3)){
//     console.log('This is an array');
// }else{
//     console.log('This is not an array');
// }

// Task-5.......
// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// -------ans-----
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const combineArray = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(combineArray);
