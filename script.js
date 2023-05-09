// Maps (ES6 - Data Structure) - Fundamentals
// - Data Structure that we can map values to keys, keys in maps can be any type (Object keys are always string type)
// - BUILD IN Methods: Create Map  <SYNTAX:> new Map()
// - Add Element(usual and chaining) <SYNTAX:> .set(key, value)  or <SYNTAX:> .set(key, value).set(key, value).set(key, value) etc
// - Read Data from maps using KEY <SYNTAX:> .get(key)
// - Check a map contains certain KEY <SYNTAX:> .has(key)
// - Remove all element from the map <SYNTAX:> .clear()
// - Using ARRAY and map KEYS (NOTE: An array has to be initialised or the data will just get undefined - CAUSE: Different reference in the HEAP)
// - Using OBJECT and map KEYS (ie using the DOM object as key using document.querySelector('html_element'))

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

// >> Create a map  <SYNTAX:> new Map()
const rest = new Map(); // Create an empty map (initially)
const names = new Map();

// >> Fill up the map (Add element to data stucture)  <SYNTAX:> .set()
//  -  Sets contains Key and value pairs so Key and value need to be added at the same time
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Itality');
console.log(rest.set(2, 'Lisbon, protugal')); // .set will update the most recent set with the new element
console.log(rest);

// >> Chaining Maps (Creating elements one after the next) <SYNTAX:> .set().set().set()  etc
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'we area closed');
console.log(rest);

// >> Read Data from maps  <SYNTAX:> .get()
//  - Pass in the name of the key
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Realtime usage
const time = 21;
// this example is clever but code may not be easily readable
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //Compare time against the time open and close in the map and return the value of true and false

// >> Check a map contains certain KEY <SYNTAX:> .has()
console.log(rest.has('categories')); // Returns True if it has the key and false if it doesnt have it

// >> Deleting element in a map using the KEY <SYNTAX;> .delete()
rest.delete(2);
console.log(rest);

// >> Check the size of the map <SYNTAX:> .size
console.log(rest.size);

// >> Remove all element from the map <SYNTAX:> .clear()
names.set('1', 'Jason').set(2, 'Faye');
console.log(names);
names.clear();
console.log(names);

// >> Using ARRAY and OBJECT and map KEYS
// ARRAY as KEY
rest.set([1, 2], 'Test');
console.log(rest);
// Retriving data using the KEY of ARRAY
console.log(rest.get([1, 2])); // This array has its own idenfier (in the Heap), not the same as the one we construct in the .set()

//To make the above work
// - An array new to be made
const arr = [1, 2]; // This will allow JS to always use the same array identifer in the Heap

// - Pass in the made array into the map
rest.set(arr, 'test1');
console.log(rest.get(arr));

// OBJECT as KEY (Using DOM object as Key) NOTE: DOM object is object type
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
