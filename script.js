// Arrow Functions 
// - Shorter and fast to write 
// - Is a special type of function expression 
 
'strict mode'

//Arrow Function initialisation
const calcAge = birthYear => 2023 - birthYear; //This way the return data is outputed implicately 
const fayeAge = calcAge(1993);  
console.log(fayeAge);    


//Arrow Function with one parameter and return data
const yearsUntilRetirement = birthYear => {  //The bracket is needed with there are more than 1 line of code to be run for the function
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;                      //In this case the return is needed to return the return data
}

//Arrow Function with more than one parameter and return data
const yearsToRetirement = (birthYear, firstName) => {  
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.` ;                     
}

const randomAge = yearsUntilRetirement(1989);
console.log(randomAge);

const personOne = yearsToRetirement(1989, 'Jason');
console.log(personOne);





