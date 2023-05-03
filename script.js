// Short Circuiting (&& and ||)
// - Use Any data type, return any data type, short-circuiting
// - OR Short Circuiting: if the first value is a truthy value, it will immediately return that first value otherwise will return the right hand side value 
// - AND Short Circuiting: if the first value is a falsy value, it will immediately return that first value otherwise will return the right hand side value
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

  orderPizza: function(mainIngredient, ...otherIngredients) {
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

// >> Short Circuiting 
// OR opertor
// - Short Circuiting: if the first value is a  truthy value, it will immediately return that first value otherwise will return the right hand side value
console.log(`----- OR -----`)
console.log(3 || 'Jason'); // Short Circuiting: if the first value is a  truthy value, it will immediately return that first value 
console.log( '' || 'Jason');
console.log(true || 0);
console.log(undefined || null);
console.log (undefined || 0 || '' || 'hello' || 23 || null) // Short circuiting will find the next truthy value 

// Using Tenary Operator to assign a default value if the propery does not exist in the restaurant object
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests? restaurant.numGuests: 10;
console.log(guests1);

// Using Short Circuiting Method to set default values 
//  - Easier than using tenary operator and other logic to set default values
const guests2 = restaurant.numGuests || 10;
console.log(guests2)

//AND Operator
// - Short Circuiting: if the first value is a falst value, it will immediately return that first value otherwise will return the right hand side value
console.log(`----- AND -----`)
console.log(0 && 'Jason')
console.log(7 && 'Jason');
console.log( 'hello'&& 23 & null && 'jason'); //returns falsy value of null

// - AND Short Circuit is used so we can stop using If statment to check if something exists.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Using AND Short Circuiting Method
restaurant.orderPizza && restaurant.orderPizza('muchroom', 'spinach'); // The AND operator turns the second as the first is not falsy as the method exists







