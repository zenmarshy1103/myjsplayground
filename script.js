// Functions - Default Parameters
// - Having a default parameter 
// - <ES6> Giving value in the function (param1, param2 = 1, param3 = 4 * 3, param4 = param2 * 100 ) etc
// - Default value can be any type and can be arithmetic
// - Can not skip parameter, to skip use undefined as parameter input

'use strict';


//<ES6 WAY> Setting Default Value
// - Giving value in the function (param1, param2 = 1, param3 = 4 * 3, param4 = param2 * 100 ) etc
// - Default value can be any type and can be arithmetic
// - Can not skip parameter, to skip use undefined as parameter input
const bookings = []

const createBooking = function (flightNum, numPassengers = 1, price = 200 * numPassengers) {    

    //<ES5 WAY> Setting default values (Using Short Circuiting) 
    // numPassengers = numPassengers || 1;  //<NOTE> OR SHORTCIRCUITING -> if the LHS is falsy, RHS will be returned.
    // price = price || 199;

    const booking = {   //creating an object with properties without assigning values
        flightNum,
        numPassengers,
        price,
        
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');  //The input will append to their designated property in the booking object
createBooking('LH123', 2, 800);
createBooking('LH123', 2); 
createBooking('LH123', undefined, 1000); // Skiping parameter by using undefined
 