// Function Declaration and Expressions 
// - Calling of a function declaration function can be run before or after the function declaration initialisation
// - Calling of a function expression function has to be after function expression declaration intialisation
// - These are used on personal preference, they are literally the same.

//Function Declaration initialisation
function calcAge1(birthYear) {   //Parameter is birthYear here
    const age = 2023 - birthYear;
    return age;
}

//Parameter is the input data
//Arguments are the actual input data

const jasonAge = calcAge1(1989); //Argument is 1989 here
console.log(jasonAge);


//Function Expression initialisation, assigning an anonymous function (a function without a function name) to a varaible
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}

const cyrusAge = calcAge2(2022); //Function expression calling is the same but the parameter is added with varaiable that is assigned with the anonymous function during the function expression delaration
console.log(cyrusAge);
