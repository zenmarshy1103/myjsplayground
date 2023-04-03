// Arrays
//- Data Structure
//- Store Date in a big container to be used later in the program (can hold different data types at the same time)
//- An array is not primitive data, so the elements can be mutated even when the array is declared as const
//- An array cannot be replaced by another array
'strict mode'

const friend1 = 'Jim';
const friend2 = 'Allen';
const friend3 = 'Leone';

//Create an array with three items
const friends = ['Jim', 'Allen', 'Leone'];   //Literal Syntax
console.log(friends);

//Another way of constructing an array with items
const years = new Array(1991, 1989, 2023, 2000); 

//Getting the elements of the items in the array
console.log(friends[0]);  //First element in the array
console.log(friends[2]); //Third element

//Display the number of elements in the array
console.log(friends.length)

//Getting the last element of the array
console.log(friends[friends.length -1]);

//Mutate element in the array
friends[2] = 'Jay';
console.log(friends);

//Illegal - AN ARRAY CANNNOT BE REPLACED BY ANOTHER ARRAY (Error in console will appear)
// friends = ['Emma', 'Eliza'];

//Arrays can have elements with different data type at the same time, string, data, calculation(int), array, function calls etc.
const firstName = `Jason`;
const jason = [firstName, 'Liu', 2023 - 1989, 'web developer', friends ];
console.log(jason);

//Exercise - Using an array to be used in a function with single value input
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const birthYears1 = [1989, 1993, 2022, 2023];

const age1 = calcAge(birthYears1[0]);
const age2 = calcAge(birthYears1[1]);
const age3 = calcAge(birthYears1[birthYears1.length - 1]);
console.log( age1, age2, age3);

const ages = [calcAge(birthYears1[0]), calcAge(birthYears1[1]), calcAge(birthYears1[birthYears1.length - 1])];
console.log(ages);








