// Truthy and Falsy Values (Boolean)
// - Falsy: is not false and will become false when converted to a boolean (1. 0 2. '' 3. underfined 4. null 5. NaN)
// - Truthy: will become true when converted to boolean (1. number > 0 , )


console.log(Boolean(0));  //Falsy Value
console.log(Boolean('Jason')); //Truthy Value
console.log(Boolean(``));     //Falsy Value
console.log(Boolean(undefined));  //Falsy Value
console.log(Boolean({})); //Truthy Value

const money = 0;    
if (money) {    //Boolean 0 = Falsy -> goes to else condition
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height;   //height is undefined here as it is not assigned with any value. 
if (height) {   //Boolean: undefine = Falsy -> goes to the else condition.
    console.log(`Height is defined`);
} else {
    console.log(`Height is not defined`);
}