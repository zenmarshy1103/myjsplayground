// Regular Function vs Arrow Function (this Keyword and arguments Keyword)
// - NOTE: NEVER EVER use ARROW FUNCTION as a method of an object!!! this Keyword will always points to the window global object (Parent Scope) (widow)
// - BUT: ARROW FUNCTION inside a method , this Keyword will get the parent scope object (window > object > object.method(with Arrow Function))
// - NOTE: Function inside an object method, this Keyword will get undefined - 2 ways to fix: 1) Assign a varaible to preserve this Keyword of the object. 2) Use arrow function inside the object method.
// - Argument keyword (Regular Functions: argument keyword gets the numbe of arguments entered, Arrow Function: does not have argument keyword)

'use strict';

var firstName = 'Jason' // NOTE: var creates an property on the window global object

// >> Arrow Function as method of an object
// this keyword used by the arrow function will always get the global window object 
const jason = {
    firstName: 'Jason',
    year: 1989,
    calcAge: function () {
    //console.log(this); // this points to the whole object with all its attributes
    console.log(2023 - this.year); // this.attribute_of_class will let this points to the designated object attributes
   
    // // >> SOLUTION 1 - PRE ES6 (FOLLOW FIX 1, FIX 2 and FIX 3)
    // // >> Making a self variable to use this Keyword to point to the object (preserving the this keyword)
    // const self = this;  //FIX STEP 1 ( can also be const that = this) 

    // // >> Adding a function in a method:
    // const isMillenial = function() {
    //     console.log(this)  // this Keyword gets undefined
    //     console.log(self); //FIX STEP 2
    //     console.log(self.year >= 1981 && self.year <= 1996); //FIX STEP 3
    //     console.log(this.year >= 1981 && this.year <= 1996); //PIT FALL: this in a function will ALWAYS get undefined as it is just a regular function call
    // }   
    
    
    // >> SOLUTION 2 - ES6 Arrow function inside a object method - 
    // >> Using an arrow function will get the parent scope object which is the jason object
    const isMillenial = () => {       // FIX A  
        console.log(this); 
        console.log(this.year >= 1981 && this.year <= 1996); 
    }    
    isMillenial();
    },

  greet: () => console.log(`hey ${this.firstName}`),  // this is called by the greet function hence the arrow function will get the window function and window.firstName is undefined.
  //But if a Var variable is created. this will get the var object when using the same var variable name.
  greet1: () => console.log(`hey ${this}`),  // ARROW FUNCTION will get the window global object
};
jason.greet1();
jason.greet();


// > Function inside a method
// this will ALWAYS get undefined even if a function is in the object (object > object.method > function)
jason.calcAge();

// To fix this, getting rid of undefined we need to set a self variable (PRE ES6 solution) (REFER SOLUTION 1: FIX 1, FIX 2 and FIX 3)

// New way to fix ES6 solution (Refer to SOLUTION 2: FIX A - Using Arrow Function)


// arguments keyword - Allow user to enter more argument into a function
// arguments gets the number of argument inputs from the user specify and store them in an array
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5 , 6, 7);

var addArrow = (a, b) => {   // Arrow function does not have the argument keyword
    console.log(arguments);
    return a + b
}
addArrow(1, 3, 4, 5);