// Working with Strings - Part 3  (More Methods)
// - Splitting string to multiple parts <SYNTAX> .split()
// - Joining Strings  <SYNTAX> .join()
// - Padding a string <SYNTAX> .padStart()  .padEnd()
// - Repeat Method  <SYNTAX> .repeat()
// - USE MDN to search for more string methods -> SEARCH: mdn String Replace in Google (in this search format)

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

// >> 1. Spliting string to muliple parts 
// - split()
// spliting the array that has the divider string, each of the content before the divider string is then stored in an array

console.log('a+very+nice+string'.split('+')); // returns ['a', 'very', 'nice', 'string']
console.log('Jason Liu'.split(' '));


// using Destructing on array 
// - .split() is very easy to obtain data since it is turned into an array. Destructing it is very easy. 
const [firstName, lastName] = 'Jason Liu'.split(' ');


// >> 2. Joining Strings
const newName = ['Mr.', firstName,  lastName.toUpperCase()].join('-') // join each of the sting stored in the array  with joining the string
console.log(newName);  // returns Mr.-Jason-LIU


const capitaliseName = function(name) {
  const names = name.split(' ');  // Split each word into array
  console.log(names);
  const namesUpper = [];  //initialising empty array 
  
  // - <METHOD 1> using slice to capitalise
  // for (const n of names) {
  //   namesUpper.push(n[0].toUpperCase() + n.slice(1));   //Pushing each capitalised word onto the array
  // } 
  // console.log(namesUpper.join(' '))    // Join each of the content of the array with space as joining string

  // - <METHOD 2> using replace to capitalise
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' ')) 
}
capitaliseName('jessica ann smith davis');
capitaliseName('jason liu');


// >> 3. Padding a string -- < left of, continue from here
// - Add a number of character until a certain length
const message = `Go to gate 23!`;

// Adding at the START of the string
console.log(message.padStart(25, '+')); // add the '+' character until the length of the string equals to 25 at the beginning of the string
console.log('Jason'.padStart(23, '+'));

// Adding at the END of the string
console.log(message.padStart(25, '+').padEnd(35, '+')); // add the '+' character until the length of the string equals to 35 at the end of the string
console.log('Jason'.padStart(23, '+').padEnd(30, '+'));


// Real World Application - Banking (Masking Credit card +++++++XXXX);
const maskCreditCard = function(number) {
  const str = number + '';  // turning number into a string, because of coercion a number adding to a string will become a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(73857999));
console.log(maskCreditCard(43376537281088));
console.log(maskCreditCard('735039750893805803980'));

// >> 4. Repeat Method
//    - Allows us to repeat the same string multiple times
const message2 = `Bad Weather... All Departures Delayed... `;
console.log(message2.repeat(5));  //Repeats the message 5 times

const planesInLine = function(numberOfPlanes) {
  console.log(`There are ${numberOfPlanes} planes in line ${`✈`.repeat(numberOfPlanes)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

// USE MDN to search for more string methods
// -> SEARCH: mdn String Replace in Google
