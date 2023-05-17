// Functions - Accepting Callback Functions
// - Use a function to call back another function
// - HIGH ORDER FUNCTION (HIGH LEVEL Abstraction ) - using function as one of its parameter, and the callback function is lower level abstration
// - Abstraction  Concept: Higher Order Function only cared about its own function rather than the function of the callback function

'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //replace spaces / /g   <- (g: global) with empty string
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); // ... Spread Operator:  unpack the elements in the array that was made when .split() was called
  return [first.toUpperCase(), ...others].join(' '); // joins the first and ...others by space
};

// >> 1. Higher Order Function
//      - Takes in a function (the function value is passed in not function)
//      - Function in general have property and build in method
//      - Abstraction  Concept: Higher Order Function only cared about its own function rather than the function of the callback function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`); // fn(str)  - giving the input parater of str to the call back function input
  console.log(`Transformed By: ${fn.name}`); //rading the name property of the function
};

// >> 2.  Call Back functions
//      - Use a function to call back another function
//      - JS uses callbacks all the time
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// function high5() {
//     console.log(`🖐`);
// }

const high5 = function () {
  console.log(`🖐`);
};
document.body.addEventListener('click', high5); // the function will be called back when the click event listener has been triggered

['Jason', 'Faye', 'Cyrus'].forEach(high5); // for each of the element call the call back function on each of them
