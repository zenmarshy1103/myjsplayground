// Arrays - Simple Array Methods
// - Methods are functions attached to object / arrays (Arrays are objects)
// -  Slice Method
// -  Splice Method
// -  Reverse Method
// -  Concat Method
// -  Join Method
// -  Always use MDN to check up more methods

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


let arr = ['a', 'b', 'c', 'd', 'e'];

// >> Slice Method
//  - returns a new array with the sliced parts
//  - can be used to creat a shallow copy of an array
//  - SYNTAX: 
//    - 1) arr.slice(start-index)
//    - 2) arr.slice(start-index, end-index)

console.log(arr.slice(2));
// length of array = end-index - start-index (4-2 = 2)
console.log(arr.slice(2, 4));  
// -1 is always the last element of the array
console.log(arr.slice(-1)); 
// slicing start from index 1 and end before the second last element counting from the end element  
console.log(arr.slice(1, -2)); 
// shallow copy of the array
console.log(arr.slice());  // this can be used for chaining methods
// similar way using spread operator
console.log([...arr]);


// >> Spice Method
//  - mutates the original array
//  - used to remove elements from an array
//  - SYNTAX:
//    - 1) arr.splice(index)
//    - 2) arr.aplice(index1, index2)

 //Takes out elements from index position
//  console.log(arr.splice(2));
 // remove the last elemetn of the array
 arr.splice(-1);
 // Original array has the elements stripped out
console.log(arr);  
// Deleting specific elements in the array
arr.splice(1, 2); // element at index 1 and 2 are deleted
console.log(arr);

// >> Reverse Method
//  - Mutates the original array
//  - Used to reverse the items in the array
//  - SYNTAX:
//    - arr.reverse()
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j', 'f'];
// reversing array elements
console.log(arr2.reverse());
// mutates the original array
console.log(arr2);

// >> Concat Method
//  - Used to concat (link and chain) an array to another array
//  - SYNTAX: 
//     - arr1.concat(arr2) 

// Concatenating aarr2 to arr array
const letters = arr.concat(arr2)
console.log(letters);

// Another way of concatenating use Spread Operator
console.log([...arr, ...arr2]);

// >> Join Method
//  - joining each element in the array with specifed variable
//  - SYNTAX:
//    - arr.join('variable')

//Joining each element in letters array with '-' varable
console.log(letters.join('-'));















