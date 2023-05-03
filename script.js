// The Rest Pattern and Parameters
// - Used for both Array and Object
// -  Rest Pattern is used where we would write variable names separated by commas (left hand side of the assignment "=" operator )
// -  Rest Pattern: Take the REST of the elements that is not being used in the destructing assignment in the array
// -  Rest Pattern: Must be the last in the destructing assignment,
// -  Rest Parameter: Any arbitory argument will still allow the function to be executed and using the arbitory arguments
// -  Rest parameters are packed into an array of the parameter name 

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

// >> Rest Pattern (LHS of assignment operator "=")
//    - Works on arrays and objects
//    - Does the opposite to spread operator
//    - Take the REST of the elements that is not being used in the destructing assignment in the array
//    - The rest pattern must be the last in the destructing assignment (JS has no idea where to stop collecting the rest of the array if put else where)
//    - Pack elements into an array

// >> <USE CASE> Destructing 
// Arrays
//  - order matters, rest patern MUST be at the end of a destructing assignment 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);  //others gets the rest of the undestructed array of [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
//  - remaining elements will be collected into a new object
//  - order does not matter compared to array as the value is the name of the property name of the object
const {sat, ...weekdays} = restaurant.openingHours; //... weekdays will get the rest of the object fri and thu and stored in a new object called weekdays.
console.log(weekdays);


// >> Rest Parameters
//    - Any arbitory argument will still allow the function to be executed and using the arbitory arugments
// rest parameters are packed into an array of the parameter name

// >> <USE CASE> Passing into Functions 

//Functions 
// rest parameters are put into an array of the parameter name
const add = function(...numbers) {       
  console.log(numbers);
  let sum = 0;
 
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];        
  };
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// - Putting an array as the arguments into a function with rest parameters
const x = [23, 5, 7];
add(...x) //Spreading the array x into individual values and  passed into the function as rest parameter where it turns it into an array.

// Using the new method constructed in restaurant.orderPizza
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom'); //the the rest parameter did not get any input parameter, it will return an empty array






