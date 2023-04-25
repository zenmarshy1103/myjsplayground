// Scoping 
// - Global ,functional Scope, block scope
// - Functional Scope (parent scope)
//

'use strict';


function calcAge(birthYear) {                 //This function is declared in the global scope
    const age = 2023 - birthYear;
    console.log(firstName);                   //firstName not in the scope of this function but it is a global variable
    
    function printAge() {
        var millenial = false;
        const firstName = 'Faye'   //This variable is now function scoped so the call back will use this instead of the global varible (when two of the same variables are being declared)
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;   // Age and birthYear variable out outside of the printAge function or in the parent of the printAge (Child) function
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `your are a millenial ${firstName}`;

            function add(a, b) {
                return a + b;
            }

            //output = "NEW OUPUTPUT" // This can be changed as output is in the parent scope
            const output = " NEW OUTPUT";  //This will not be used when the output is called outside this scope as the parent scope variable will be used first during the lookup
            
        }

        console.log(output);  // Now this prints "NEW OUTPUT"
        //console.log(str);  //Reference Error - str variable is not global scope or function scope of the parent scope but it is a block scope.
        console.log(millenial); // this runs as var variable is function scoped
        //add(2, 3);   //Reference Error - as function add is blocked scope - ONLY in Strict Mode

       
    }
    printAge();

    return age;
}


const firstName = 'Jason'                     //Global Variable

calcAge(1989);

//console.log(age);  //This will output referenceError - as age is function scope not a globally scoped variable