// Object - Destructing
// - Unpacking properties from an object into separate variables
// - Retrieve property from the object and store it into variables
// - Object Destructing: Order Does not matter, the destructing values must be exactly the same as the property of the object
// - Assigning default values for destructing property values
// - Mutating variables of destructing Object
// - Destructing Nested Object
// - Using functions with destructing arguments of a input object
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

// >> 1. Object Destructing
//  - <USED TO> API retrivals - API are normally in JSON formate or object format
//  - The Order does not matter for object
//  - variable name must have be the exact same name as the object attribute that you are wanting to retrieve
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// >> 2. Renaming property name
//  - <USED TO> Changing property name of third party object data
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// >> 3. Assigning Default Values for Properties
//  Return value of an property that does not exist in an object will get undefined
//  Assigning defalue value to object destructing, will return the default value if the property does not exist in the object and return the propertry value wif the property exists in the object
const { menu = [], starterMenu: starters = [] } = restaurant; //Menu property will get the default of empty array and starters will get the values of the starter property in the restaurant object
console.log(menu, starters);

// >> 4. Mutating variables of destructing Object
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //If the variables that we are destructing into is already assigned, wrap the destructing code in ( ), or JS will come up with the error and tells you that it is expecting a function or statement
console.log(a, b);

// >> 5. Destructing Nested Object
// Go to the wanted object and then destruct the properties
const {
  fri: { open: o, close: c }, //renaming the destructing varaibles and return of the nexted object properties
} = openingHours; // Returns the properties of the nexted openingHours object {open: x, close: y}

const { fri } = openingHours;
console.log(fri);

console.log(open, close); // this two varables will now not output any values as they have been renamed
console.log(o, c);

// >> 6. Using functions with destructing arguments of a input object
//  - Input of the function need to be the exact same name as the property of the input object. (See above in the Restaruant Object -> orderDelivery method)
restaurant.orderDelivery({
  time: `22:30`,
  address: `Via Del SOle, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

//  - Input Object with missing data, since the destructig input argument values are set with default value
//  - The default values will be used for the missing properties ( See Restaurant -> orderDelivery method)
restaurant.orderDelivery({
  address: `Via Del SOle, 21`,
  starterIndex: 1,
});
