// this Keyword
// - Dynamic not static
// - this will always points to the object calling the method
// - ARROW FUNCTION: does not have thie keyword, this will get the window object.
// -

'use strict';
// >> Global Variable
console.log(this); // this gets the global object (window)

//Function
const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // this gets the function this keyword which points to undefined
  // as this referes to the function and it is not an object
};
calcAge(1989);

// >> ARROW FUNCTION
const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // NOTE: ARROW FUNCTION behaves differently to normal function
  // ARROW FUNCTION: this gets the parent scope of the arrow function which is the window object
  // Not the this keyword of its own arrow function.
};
calcAgeArrow(1989);

// >> Object - Method
// NOTE: this keyword always points to the the object that is calling the method
const jason = {
  year: 1989,
  calcAge: function () {
    console.log(this); // this points to the whole object with all its attributes
    console.log(2023 - this.year); // this.attribute_of_class will let this points to the designated object attributes
  },
};
jason.calcAge();

// >> this keyword always points to the the object that is calling the method
const faye = {
  year: 1993,
};
//adding object attribute (adding function)
// Method borrowing
faye.calcAge = jason.calcAge; // Assigning the calcAge function from jason object to faye object
faye.calcAge(); // Now the this keyword gets faye object, NOTE: this keyword always points to the the object that is calling the method

// >> A function getting the function called from the method of an object
// this keyword will only point to the object calling the method
const f = jason.calcAge; //Copied the method to a variable (copying a funcion and assign to another function)
f(); // this keyword points to undefined as there is no owning object just a regular function.
