// Objects - Dot vs Bracket Notation
//- Used to retrieve and adding data from and to object data structures.
//- 
//-
'strict mode'

//Constructing Object Data Sturcture with key-Value pairs
const jason = {   //Object Literal Syntax - Literally constructing the object with the properties
    // Assigning key: value pairs
    firstName: 'Jason',  // property firstName , there are 5 properties for jason object
    lastName: 'Liu',
    age: 2023 - 1989,
    job: 'web developer',
    friends: ['Allen', 'Jim', 'Han'],
};

console.log(jason);

//Getting a property of an obect - Using Dot Notation 
console.log(jason.lastName); //Retrieving the lastName property of the jason Object, it has to be a real, existing properly key name

//Getting a property of an obect - Using Bracket Notation
//can be used to have cancaternated string as input - more useful than dot notation when needed
console.log(jason['lastName']); //Retrieving the lastName property of the jason Object using the key of property inside the object

const nameKey = `Name`;
console.log(jason['first' + nameKey]);
console.log(jason['last' + nameKey]);

//This will output an error - Dot Notation using cancaternated input 
//console.log(jason.'last' + nameKey)  

const interestIn = prompt(`What do you want to know about Jason? Choose between firstName, lastName, age, job, and friends`);
console.log(interestIn);
//Using DOT NOTATION 
console.log(jason.interestIn); //OUTPUTS: undefined because there is no property key called interestIn, the dot notation does not get the assigned value but the name of the variable
// but if the property is not in the object will output undefined.

//Using BRACKET NOTATION
console.log(jason[interestIn]); //OUTPUTS: the value of the key name of the property, the bracket notation evaluate the value stored in the variable which is then used for the input expression of the bracket notation.

//Accounts for property not in the object, outputs an string in the console.
if (jason[interestIn]) {
    console.log(jason[interestIn]);
} else {
    console.log(`Wrong Request, Choose between firstName, lastName, age, job, and friends `);
}


//Adding property to object
jason.location = 'New Zealand';
jason['email'] = 'jasonliu628@gmail.com';
console.log(jason);

//Challenge - Output "Jason has 3 friends, and his best friend is called Allen"
console.log(`${jason.firstName} has ${jason.friends.length} friends, and his best friend is called ${jason.friends[0]}`);