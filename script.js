// Looping Objects (Object Key, Values and Entries)
// - Looping Over Property Name (keys):  <SYNTAX> object.key(object.propertyname)
// - Looping Over Property Values (Values): <SYNTAX> object.value(object.propertyname)
// - Using Entries to Loop Over the whole Object: <SYNTAX> object.entries(object.propertyname)
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

// >> 1. Looping Over Property Name (keys)
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// >> 2. Looping Over Property Values (Values)
const values = Object.values(restaurant.openingHours);
console.log(values);

// >> 3 . Using Enties to Loop Over the whole Object (Property Name + Property Value)
//    - Turns from object to array
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {    // Destructing array [Key , value], value is stored as object so destrucing it using object destructing 
  console.log(`on ${key} we open at ${open} and close at ${close}`);
};
