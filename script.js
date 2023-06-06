// ARRAY - DATA Transformation with Map, Filter and Reduce (map method)
// - Maps: Return a new array containing the results of applying an operation on all original array elements
// - Filter: Return a new array containing the array elements that passed a specified test condition
// - Reduce: Boils, reduces all array elements  down to one single value (ie adding all elements together and other methods)
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

// Functions
const displayMovements = function (movementsArray) {
  // Clear previous data in the movement container
  containerMovements.innerHTML = '';

  // Using For Each array method to get the value of each of the element and the index number
  movementsArray.forEach(function (movementValue, valueIndex) {
    // Tenery Operator to check if the movementValue is deposits or withdraw
    const movementType = movementValue > 0 ? `deposit` : `withdrawal`;

    // Create HTML Literals
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${
      valueIndex + 1
    } ${movementType}</div>
      <div class="movements__value">${movementValue}€</div>
    </div>  
    `;

    // Insert HTML Literals onto the DOM into movement container
    // Using  insertAdjacentHTML method with afterbegin
    //  - This will put the HTML literal with the last on the top of the beginning of the movement container html element
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// >> MAP Method
//  - Map Method is functional paradigm (Functional Programming)
//  - Each time the MAP method is calls a callback function:
//    1) It will pass in: current Array element, current index and the whole array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Convert elements in movements array to USD

const eurToUsd = 1.1;

// const movementsUsd = movements.map(function(movementArray){
//   return movementArray * eurToUsd;   // Returns an new array with each element * eurToUsd
// })
// console.log(movements);
// console.log(movementsUsd);

// Simply the callback function to arrow function
//  - No parentheses is needed when there is only one argument for the arrow function
//  - No need return statement and { } as we only have one line of code for return value
const movementsUsd = movements.map(movementArray => movementArray * eurToUsd); // Returns an new array with each element * eurToUsd

console.log(movements);
console.log(movementsUsd);

// Using for of loop to perform the same task
const movementsUSDfor = [];
for (const movement of movements) {
  movementsUSDfor.push(movement * eurToUsd);
}
console.log(movementsUSDfor);

// const movementDescriptions = movements.map((movement, i, arr) => {
//   if (movement > 0) {
//     return `Movement ${i + 1}: you deposited ${movement}`;
//   } else {
//     return `Movement ${i + 1}: you withdrew ${Math.abs(movement)}`;
//   }
// });
// console.log(movementDescriptions);

//  Better Way - Using Tenary Operator
const movementDescriptions = movements.map((movement, i) => {  
  
  return `Movement ${i + 1}: you ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    movement
  )}`;
});
console.log(movementDescriptions);
