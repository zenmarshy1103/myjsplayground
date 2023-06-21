// Array - The magic of chaining methods
// - Methods that return new array can be chained.
// - Most importantly if the former array method returns a new array method chaining can be used even if the one after it does not return a new array.

// Project Bank Simulator -  Showing total IN, OUT and INTEREST on the Movements of Account 1  to the total on the Page

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

// Showing calculated of each elements in the movements array for account 1 and show it on the webpage
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

// Showing the total number on ehe IN, OUT and Interest display on the web
const calcDisplaySummary = function (movements) {
  // Showing the total number of deposits as the income(IN) on the display on the webpageconst incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}EUR`;
// Showing the total number of withdraws as the OUT on the display
  const outwards = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outwards)}EUR`;   //Converting the value to absolute value
// Showing the total number of interest on the income and display as the INTEREST on the display
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}EUR`;
};
calcDisplaySummary(account1.movements);

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

const euroToUsd = 1.1;
// Chaining Array Methods
// - Methods that return new array can be chained. Most important if the former array method returns a new array method chaining can be used even if the one after it does not return a new array.
//  1. Filter out all movements hat are less than 0 and create a new array storing the values
//  2. using the array from 1 to convert each of the element to USD and store it in the new array
//  3. using the array from 2 and add them up using reduce method
const totalDepositsUSD = movements
  .filter(mov => mov > 0)  // .filter() returns a new array
  .map(mov => mov * euroToUsd) // .map() returns a new array
  .reduce((acc, mov) => acc + mov, 0);  // .reduce() returns a value (Not a new array)
console.log(totalDepositsUSD);
