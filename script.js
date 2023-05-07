// Logical Assignment Operators - Short Circuiting
// - More concised than the OR , AND and Nullish Coalescing Operator for short circuiting
// - SYNTAX: OR: ||=, AND: &&=, Nullish: ??=
// -


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

const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//Set a default numGuest if the object does not have it.
// rest1.numGuest = rest1.numGuest || 10; // output the rest.numGuest if it is truthy value if not output 10 (outputs: 20)
// rest2.numGuest = rest2.numGuest || 10; // output the rest.numGuest if it is truthy value if not output 10 (outputs: 10)

//Using Logical Assignment (More Concised)
// - OR ASSIGNMENT OPERATOR
// rest1.numGuest ||= 10;   
// rest2.numGuest ||= 10;

// - Nullish Coalescing Assignment Operator ( Null or undefined true the output the RHS value)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;


// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

// - AND Assignment Operator (Assignment the RHS value if the current value is truthy)
rest1.owner  &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

