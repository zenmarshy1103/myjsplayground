// The Spread Operator (...)
// - This Operator works on all iterables (arrays, strings, maps, sets) excluding objects (PRE ES6)
// - Expanding an array into all its elements  (Unpacking all element at once)
// - Getting element out of an array (similar to destructing an array) BUT does not create separate variable to store each of the values
// - NOTE: The spread operator is used when you need to write values separated by COMMAS!!!
// - USE CASES:
//  1. Copy shallow copies of arrays
//  2. Merge two or more arrays together
//  3. Using the values inside the array as input arguments of a method / function
//  4. Copy shallow copies of objects (Post ES6 JS)

'use strict';

// Data needed for a later exercise
// const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// >> Creating a new array based on the original array and adding new elements in the beginning.
//  - traditional way: manual all ins or looping
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread Operator (...)
//  - ... takes all the values out of the array then write it individually if it were to write 7, 8, 9 of the elements in the array
//  - without ...  the array will be included inside the array.
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // outputing the indivial values inside the array (same as writing >> console.log(1, 2, 7, 8, 9);)

//Example
//  - Creating a new menu
const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Creating a completely new array with the values inside the origianl restaurant.mainmenu array and adding in a new item
console.log(newMenu);

// <USE CASES 1> Copy shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu]; //Shallow copy of the values of the array
console.log(mainMenuCopy);

// <USE CASES 2> Merge two or more arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: Arrays, Strings, Maps, Sets
// > Strings
const str = 'Jason';
const letters = [...str, ' ', 'L.'];
console.log(letters);
console.log(...letters);
//console.log(`${...str}, Liu`) // IMPORTANT!!! WILL NOT WORK: The spread operator only works when passing in as an aruguemnt of a function or using it with values separate with COMMAS !!!

// <USE CASES 3> Using the values inside the array as input arguments of a method / function
//Using the spread opertor as arguments inputs to a method / functoin
// - method constructed in restaurant.orderPasta
//const ingredients =[prompt("Let's make pasta! Ingredient 1?"),prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?"), ]
//console.log(ingredients);
//restaurant.orderPasta(...ingredients); //The value of each of the elements inside the array will be used as input arguments for ing1 ,ing2 and ing3 of the method

// Objects (New Version of JS works on Object)
// Creating a new object based on the original object and adding properties to it.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//Shallow copying object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Jason's pizza store`;
console.log(restaurant.name);
console.log(restaurantCopy.name);
