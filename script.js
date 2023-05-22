// Functions - The Call and Apply Method to this Keyword
// - Setting this this keyword manually (using .call(), .apply() and .bind())
//    - Call Method <SYNTAX:> function.call(this-keyword-pointing-to, param1, param2, etc)  <- MODERN JS
//    - Apply Mehtod <SYNTAX:> function.apply(this-keyword-pointing-to, array of param)  <- Hardly Used Nowadays
//    - Bind Method <SYNTAX:> function.bind(this-keyword-point to) and creates a new function, used for partial application purposes also
'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function (){} // ES5 SYNTAX
  book(flightNum, name) {
    // ES6 SYNTAX
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jason Liu');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book; // Storing a method from an object to an variable, turning a method to a normal function then use it in other object as an method
// <Note> Regular function call, this keyword points to undefined
// book(23, 'Faye Jia')  //<- does not work

// >> 1 .Setting this Keyword manually
//      - Telling JaveScript what this should look like rather than getting undefined
//      - Function is an object and object has methods, so function has build in methods.

//  - Call Method
//    - SYNTAX: function.call(THISKEYWORD-Pointing-to-object, argument to function)
book.call(eurowings, 23, 'Faye Jia');
console.log(eurowings);

book.call(lufthansa, 239, 'Cyrus Liu');
console.log(lufthansa);

//  - Apply Method (Not really used much nowadays)
//    - will take an array of the argument
const flightData = [583, 'Claire Liu'];
book.apply(eurowings, flightData);
console.log(eurowings);

// >> Modern JS
// - Use .call() method
// - use ... spread operator on array to get each element variables
book.call(swiss, ...flightData); // Using the spread method to use the elements in the array
console.log(swiss);

// - Bind Method
// - Doex not call the function
// - returns the new function where the 'this' keyword is bound
// - It sets to what ever value we pass into .bind()
const bookEW = book.bind(eurowings); // This does not call the book function but return a new function for book and the this keyword will be set to eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// >> Resetting parameters of new function (Partial Application - part of the parameter is applied)
const bookEW23 = book.bind(eurowings, 23); // Presetting the first parameter of the bookEW23 function. now book(flightNum, name) , has 23 set to FlightNum, so the new function only require a name parameter
bookEW23('Jason Liu');
bookEW23('Claire Liu');

//  >> Using Object with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // this keyword in an event listener function will always point to the element calling the event listener
  // So we need to bind the this keyword to lufthansa.

// >> Partial Application (Preset Parameters)
const addTax = (rate, value) => value + value * rate; //Arrow function returning value + value * rate (without return keyword)
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23);  //setting null because we are not goint to assign the this keyword in this application but the parameres only, setting rate = 0.23 for the new addVat function
console.log(addVAT(100));
console.log(addVAT(50000));
console.log(`----------------`)

// Practice Example 
// - Turning the Partial Application above using function returning function method 
const addTaxRate = function(rate) {    // Box 1 contains Box 2. BOX 2 has the end product the final outcome of the functoin
  return function(value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(50000));
console.log(`----------------`)
console.log(addTaxRate(0.23)(100));
console.log(addTaxRate(0.23)(50000));