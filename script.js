// Working with Strings - Part 2  (Changing Case, replace content and comparison between strings)
// - Changing the case of the string
// - Take out spaces
// - Replacing part of a string (Letters and Words)
// - Booleans as return value for string methods (For conditionals)
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

// >> 1. Changing the case of the string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//     Fix capitalisation in name
const passenger = 'jAsON';
const passengerLower = passenger.toLowerCase();
const PassengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); //Conversting the first letter then adding the rest of the name using slice method on the remaining letters
console.log(PassengerCorrect);

//  >> 2. Take out spaces
//    Comparing email 
const email = 'hello@jason.io';
const loginEmail = ' Hello@Jason.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // Take out the white spaces
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim(); 
console.log(normalisedEmail);
//Comparing Emails
console.log(email === normalisedEmail);

// >> 3. Replaing part of a string
//  - Replace only replaces the first occurance of the search
// Replace character
const priceGB = '288,97p'
const priceUS = priceGB.replace('p', '$').replace(',', '.');   //Replace p with $ 
console.log(priceUS);

// Replace word
const announcement = 'All passengers come to boarding door 23, Boarding door 23!'
console.log(announcement.replace('door', 'gate'))
// console.log(announcement.replaceAll('door', 'gate'))  // New Method in ES6

// Regular expression to tell the replace method to target all occurance of the search , change ' ' to / / turns it to regular expression
console.log(announcement.replace(/door/g, 'gate'))   //adding g flag, it stands for global

// >> 4. Booleans as return value for string methods (For condionals)
// - startsWith()
// - endsWigh()
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));  // returns true as it includes A320 in plane
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('A320'));
console.log(plane.startsWith('Ai')); // returns true as plane starts with Ai as in Airbus A320neo

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family')
}

//  Practice Exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT ALLOWED on board!!!');
  } else {
    console.log('Welcome aboard : )');
  }
}
checkBaggage('I have a laptop, soMe food and a picket knife');
checkBaggage('Socks and camers');
checkBaggage('Got snacks and a gun for protection');

