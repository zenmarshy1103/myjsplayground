// Optional Chaining (?.)
// - For Arrays and Objects
// - LHS?.RHS    (If LHS property exist in the object return the RHS property in LHS otherwise return undefined )
// - Similar to Nullish Coalescing Operator that deals with Null and Undefined values, therefore the both of them are used together for some cases

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

// Checking if an property exists in the object and a propery in a nested object exists
//  - This gets very messy quickly if there are a lot of deeply nested objects
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open);

// >> Optional Chaining
//  - If certain property does not exist, 'undefined' is immediately returned
console.log(restaurant.openingHours.mon?.open); // if left hand side of ?. is true then the right hand side propery will be read if not then return undefined

// >> Multiple Optional Chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
// - Check if an property exists when the property name is called by the array elements
// - Using both Optional Chaining and Short Circuiting Operator
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'wat', 'sun'];

for (const day of days) {
  //For Of Loop
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // Using with Nullish Coalescing Operator to set default value if the property is undefined
  console.log(`on ${day}, we open at ${open}`);
}

// >> Calling Method - Check if a method exists before we call it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // If function exists, output it with (0, 1) passed in as argument otherwise return undefined
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// >> Using optional Chainging on arrays
const users = [];

// const users = [
//   { name: 'Jason',
//     email: 'hello@gmail.com'
//   }
// ];
console.log(users[0]?.name ?? 'User array empty'); // Optional Chaining

if (users.length > 0) {
  //Without Optional Chaining
  console.log(users[0].name);
} else {
  console.log('user array empty');
}
