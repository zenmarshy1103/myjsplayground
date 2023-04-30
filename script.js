// Arrays - Destructing  
// - Unpacking values from an array into separate variables
// - Retrieve elements from the array and store it into variables
// - Destructing 1D Array
// - Destructing array and retrieve the wanted element from the array
// - Changing order of the variables from destructed array
// - Destructing Nested Array
// - Assigning default variables for destructing array - used when we are unsure of the size of the array.

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

  //Function to return more than 1 variable using return array type

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

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

const array1 = [2, 3, 4];
const a = array1[0]
const b = array1[1]
const c = array1[2]

// >> 1. Destructing elements into new varables
//  - Orginal array is uneffected only using its elements and store it to variables.
const [x, y ,z] = array1;   // << SYNTAX; Array Destructin Assignment
console.log(x, y ,z);

// >> Working with the data from the restaurante category array

// >> 2.  Destructing Array - Skipping element and retrieve the element you need to use
const [first, , second] = restaurant.categories; // Skipping element in the array; skipping the 2nd element by leaving a hole ie [x, ,y] = array;
console.log(first, second) //Note; 2nd element in the restaurant category array was skipped

let [main, ,secondary] = restaurant.categories;

// Switching Order - Normal Way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

// >> 3. Switch Order - Destruct way
[main, secondary] = [secondary, main];
console.log(main, secondary);

// >> 4. Destructing return values (Array type) from a function
console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// >> 5. Destructing inside of Destructing for Nested Array (Nested Destructing)
const nested = [2, 4, [5, 6]];   //Nested Array

const [i, ,j] = nested;  //Usual Desturing will get the output array element and the nested array not the element inside the nested array
console.log(i, j);

const[iOuterArray, , [jNestedArrau, kNestedArray]] = nested; //Destructing inside a destructing will get element inside nested array
console.log(iOuterArray, jNestedArrau ,kNestedArray);

// >> 6. Default Values (When we are unsure the length of the array we are trying to destruct)
// const [p, q, r] = [8, 9]; // There is no third element so r will return undefined

const [p=1, q=1, r=1] = [8, 9]; //Assign default values to destructing varables.
console.log(p, q, r);  //Elements inside the array will overwrite the default value if it is present and use the default value when the element is not present in the array  




