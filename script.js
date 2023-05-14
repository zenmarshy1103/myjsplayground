// Working with Strings - Part 1  (Slicing Strings)
// - Slicing Strings 
// - Strings are primitives, cannot be mutated
// - when using method on string, JS automatically convers string into an object (Boxing)
// - returned string from methods are primitives

'use strict';

// Data needed for a later exercise
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Function / Method to return more than 1 variable using return array type
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // >> Function / Method to destruct an object of a input argument
  // - Argument name must be the same as the property names of the input object
  // - Arguments now can be used to set default as they are the destructing of the input argument
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `ORDER RECEIVED: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pizza with: ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// String is very similar to ARRAY
// - Strings are primitives so they cannot be mutated

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);  // Returns A
console.log(plane[1]);  // Returns 3
console.log(plane[3]);  // Returns 2

console.log(`B737`[0]); // Returns B

console.log(airline.length);
console.log('B737'.length);

// >> Sting Methods
//  <BOXING> 
//  when using method on string, JS automatically convers string into an object (Boxing)
//  <Behind the Scene>
console.log(new String('TAP Air Portugal'));
console.log(typeof(new String('TAP Air Portugal')));
// Then the sting object will have build in methods (see console terminal and expand the object)
// All returned string from method are primitive 
console.log(typeof(new String('TAP Air Portugal').slice(0)));


//  1. Gets the index of letters and words
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));  //Gets the last index of the word in airline string
console.log(airline.indexOf('Portugal'));  // Search where the word starts at the index of the string

// 2. Slicing String
//  - Begin parameter
console.log(airline.slice(4)); //Slicing the string starting at the index, anything before it will be sliced off
//  - End parameter
//    length of sliced string = end parameter - begin parameter
console.log(airline.slice(4, 7)); // returns Air , 4 is A and 7 is the blank space, so the slicing stops at 7 meaning 7 and anthing after it is sliced off

// 3. Slicing without knowing the index of the string received
//  - Extracting the first Word
console.log(airline.slice(0, airline.indexOf(' ')));  // Start at index 0 and end at the index before the blank

// - Extracting the Last Word
console.log(airline.slice(airline.lastIndexOf(' ')));  // Slicing at the index that contains the last occuring blank
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Tanking out the blank 

// - Counting from the end of the string (negative index)
console.log(airline.slice(-2));   // last letter in the sting will be -1
console.log(airline.slice(1, -1)); // Returns AP Air Portuga, slicing starts at index 1 and ends before the last letter of the string

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you have the middle seat')
  } else {
    console.log('You do not have the middle seat yay')
  }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');