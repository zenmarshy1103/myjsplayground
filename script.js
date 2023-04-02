// Functions
// - A chunk of code that we can reuse in our program
// - Can have or not have parameter (input data)
// - Can output data to be used later in the code (return data) and be used to assign to a variable
'strict mode'

//Function Declaration
function logger() {
    console.log("My name is Jason");
}

//Calling function, running function  or invoking function
logger();

//reusing 
logger();
logger();
logger();

//Function with parameters(input data), the parameter will get defined when function is called.
// Returning a output that can be used when the function is called.
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;   //return data
}

//Calling the function with input data and Capturing the value into a variable)
const fruitJuice = fruitProcessor(5, 0);  //storing the function to a variable which will output the return data.
console.log(fruitJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);




