// Hoisting
// - Variables and functions have initial values before they are initialised and declared
// -  var = undefined, let and const = Teperal Dead Zone
// -  var will be created in the window object
// -

'use strict';

//Hoisting with Varaibles
// Using variables before initialiation
// console.log(me); //Initial value = undefined
// console.log(job); //Initial value = in the Teperal Dead Zone
// console.log(year); //Initial value = in the Teperal Dead Zone

// var me = 'Jason';
// let job = 'tester';
// const year = 1989;

//Hoisting with Function

//console.log(addDecl(2, 3));
//console.log(addExpl(2, 3)); // In the terperal Dead Zone - cannot access before initialization
//console.log(addArrow);
//console.log(addArrow(2, 3)); // Var is undefine when called before it is inialised so calling undefined is saying it is not a function



// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => {
//     return a + b;
// }

//Example -- 1
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10; // Hoisting with Var variable initial value is undefined

function deleteShoppingCart() {
    console.log(`All products deleted`);
}

//Example -- 2 (Variable declared with var will create it on the window object)

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
