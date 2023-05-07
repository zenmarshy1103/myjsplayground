// Enhanced Object Literals (ES6)
// - Inserting an object into an object (Nested Object)
// - Method Enhancement
// - Compute property names instead of writing them out manually and literally

// Data needed for a later exercise
// const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //Function / Method to return more than 1 variable using return array type
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // >> Function / Method to destruct an object of a input argument
//   // - Argument name must be the same as the property names of the input object
//   // - Arguments now can be used to set default as they are the destructing of the input argument
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = `20:00`,
//     address,
//   }) {
//     console.log(
//       `ORDER RECEIVED: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pizza with: ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// >>

// 3. Compute property names instead of writing them out manually and literally
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// 1. Inserting an object into an object (Nested Object)

const openingHours = {
  [weekDays[3]]: {
    //Computing the property name using the weekDays array declared before
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    //Computing using additional of two numbers in template literals
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // - PRE ES6
  //openingHours: openingHours;

  // ->> ES6 Enhanced Object Literals
  openingHours,

  // 2. Method Enhancement
  //  ->> PRE ES6
  // order: function (starterIndex, mainIndex) {
  //       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ->> ES6 Enhanced Method Constrution
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant);
console.log(restaurant.order(0, 0));
