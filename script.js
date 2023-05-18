// Functions - Function returning Functions
// - Useful when using Functional Programming Paradigm
// - <Interpretation> 
// -    1. Outer function is called first which returns a function
// -    2. The outer function that returns a function then is invoked passing in argument for inner function

'use strict';


// >> Closures 
//    - Need to come back to this (Most misunderstood topic in JavaScript)
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
};

// >> Calling functions returning functions
// 1. Method One - Unboxing each function
// Theory: Think of the most outer function is the outer box containing an inner box
//       1. Opening outer box (outer function), which contains the inner box
//       2. Then open the inner box, which has the functionality of the function.
const greeterHey = greet('Hey'); // The greet function returns an function and the value of greet is stored in greeterHey variable (This Variable now is a function returning another function)
greeterHey('Jason');  //using the greeterHey functino with parameter Jason.
greeterHey('faye')

// 2. Method Two
greet('Hello')('Jason');   //The correct interpretation is that the result of the expression greet('Hello') is a function, and then this function is immediately invoked with the argument 'Jason'.

//<Explanation> 
//To break it down step by step:

// 1. greet('Hello') is called first, which returns a function.
// 2. This returned function is then immediately invoked by using parentheses ( ), and the argument 'Jason' is passed to it.
//   So, ('Jason') is not a separate function call, but rather the argument passed to the function returned by greet('Hello').

// Task: Turn greet function into arrow function
const greetArrow = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
      };
}; 

// Shorter Way
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Whats Up')('Jason');
greetArr('Howdy')('Faye');