// Functions - Closures Examples
// - Re-assigning Function without return will still create closures
// - Closure only happens if the variable is stored in the function birthplace, without it the function will use the variable in the global scope

'use strict';

// >> EXAMPLE 1 - Re-assigning Function without return will still create closures
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  };
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// >> EXAMPLE 2 - timer function
// - Closure only happens if the variable is stored in the function birthplace, without it the function will use the variable in the global scope
const boardPassengers = function(numPassenger, waitTime) {
  const perGroup = numPassenger / 3;   // <---- CLOSURE 

  setTimeout(function(){
    console.log(`We are now boarding all ${numPassenger} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000) // Execute function after 1000ms(1s) * waitTime specified

  console.log(`Will start boarding in ${waitTime} seconds`);
}

const perGroup = 1000; // This variable will only be used if the perGroup is not in the function, allowing the function to identify it as closure
boardPassengers(180, 3);



