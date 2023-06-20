// Array - Reduce Method (Continue ...)

// Project Bank Simulator -  Computing Current Balance from Movements
//  - Adding a userName property in each of the object account element in the accounts array.

// Array Methods
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

// >> Function: Showing movement for account
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

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, movement) => acc + movement, 0)
  labelBalance.textContent = `${balance} EUR`;
}
calcDisplayBalance(account1.movements);

// > Function: Computing usernames for account

// Testing to see if the ouput is the first letter of each word
// const user = 'Steven Thomas Williams';
// const userName = user.toLowerCase().split(' ');
// console.log(userName);
// Taking the first letter of each array ,['steven',  thomas', 'willams']
// const userName = user.toLowerCase().split(' ').map((word) => word[0]).join('');
// console.log(userName);

// Turning the testing code into a function
// - Create one username for each of the account holders in the accounts array
const createUsernames = function (accountsArray) {
  //Use for each, modify the existing accountsArray's object element
  //  - add a userName property to the object element for each account stored in the account array
  accountsArray.forEach(account => {
    //This function is used to add property to an object element so no return is needed (side effect)
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// >> Array - Reduce Method
//  - Loops over the array and call the callback function in each iteration
// <SYNTAX> .reduce(function(accumulator, currentValueAtCurrentIndex, currentIndex, entireArray), initialValueOfAccumulator)
// Accumulator is a snowball or a sum
// initialValueOfAccumulator is the value of the accumulator at the start of the iteration
const balance = movements.reduce(function(accumulator, currentValue, index, array) {
  console.log(`iteration ${index}: ${accumulator}`);
  return accumulator + currentValue;
}, 0);

console.log(balance);

// Using for of loop to do perform the functionality of the reduce method
// - Needs a variable to store total
// - Cannot method chain
let bankBalance = 0;
for (const movement of movements) {
  bankBalance += movement;
}
console.log("Using for of Loop:", bankBalance);

// Get the Maximum value of the array

const maxNumber = movements.reduce((acc, mov) =>{
  // Comparing accumulator and the current movement
  if (acc > mov) return acc;   //1st Iteration: acc = movement[0] , mov = 200 : return mov = 200 as the new acc
  else return mov;             //2nd Iteration: acc = 200, mov = 450: return mov= 450 as the new acc
                               // And so on ...
}, movements[0])
console.log(maxNumber);
