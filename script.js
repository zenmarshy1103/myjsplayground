// Functions - Immediately Invoked Function Expressions (IIFE)
// - Function that is only executed once and never again, it disappears right after it is executed
// - Mainly used for Async and Await
// - THEORY: Function creates Function Scope, one scope cannot access to variables from the inner scope 
// -         All data defined in a scope is PRIVATE
// - IIFE are not widely used nowadays for data privacy, most people create a block for variable declared const and let
// - IIFE is used only when you want to execute the function once and make it disappear

'use strict';

const runOnce = function() {
  console.log(`this will never run again`)
}
runOnce();
runOnce();
console.log(`-------------`);

// Immediately Invoked Function Expression
// >> 1. Use () to wrap around function declaration statement into expression (trick JS to think this is an expression)
(function() {
  console.log('This will never run again');
  console.log(`----------`)
  const inPrivate = 23;  // This variable is private and is only accessible by the function inself (Function Scope)
})();

//console.log(isPrivate);  // <- THIS WILL NOT WORK - Global Scope cannot have access to variables inside a scope (PRIVATE SCOPE)

// Works also for arrow functions.
(() => { 
  console.log('This will ALSO never run again');
  console.log(`----------`);})();

// Block
// - Variable declared const and let inside a block create their own scope
// - Variable declared var in a block, global scope can access it
{
  const isPrivate = 23;
  var notPrivate = 46;  
}

// console.log(isPrivate)
console.log(notPrivate);




