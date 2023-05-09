// Sets (ES6 - Data Structure)
// - A collection of unique values, stored values cannot be duplicated, sets will only store the unique ones 
// - This is used to store values only, once strored you cannot retrieve each of the values stored in the set
// - Mainly Used to remove duplicated from an array and store the unique ones in the set
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

// >> Creating a set / new set  <SYNTAX:> new Set()
//  - iterables need to be passed in
//  - Can hold mixed data types
//  - Values stored cannont be duplicates of each other, sets will automatically store the unique ones
const orderSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Rosotto', 
  'Pasta', 
  'Pizza',
]);
console.log(orderSet); // OUTPUT looks like an array but different

const characterSet = new Set('Jason'); // String is always a iterable
console.log(characterSet);
characterSet.clear();  // BUILD IN Mehod <SYNTAX:> .clear() : Clear the whole set
console.log(characterSet);

console.log(orderSet.size); // BUILD IN Method: <SYNTAX> .size :(Output the size of the set)
console.log(orderSet.has('Pizza')); // BUILD IN Method: <SYNTAX> .has() : Checks if the set has certain element
console.log(orderSet.has('Bread'));

// >> Add new element to a set <SYNTAX:> .add()
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); //If a duplicate element is being added, set will only store it once
console.log(orderSet);

// >> Delete an element  <SYNTAX:> .delete()
orderSet.delete('Rosotto');
console.log(orderSet);

// >> Retriving data from Sets
//  - We cannot retrieve data from sets, sets have no indexes referring to the elements
//  - Use an array 

// >> Looping over Sets
for (const order of orderSet) {
  console.log(order);
}

// USE CASE 
// - Remove duplicate values of array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];  //Unpacking elements, using spread operator, from staff set and store it into an array
console.log(staffUnique);
console.log(new Set(staff).size); //Checking the size of the set

