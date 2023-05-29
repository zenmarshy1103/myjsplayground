// Functions - Closures (JS Feature)
// - Closure works from top to bottom of the code. And utilising CALL STACK and SCOPE CHAIN for execution
// - A function does not lose connection to variable that existed at the function birthplace
// - Closer: Variable Environment attached to the function, exactly as it was at the time and place the function was created
// - Closer is used first over global variables (has Priority over scope chain)
// - We do not need to create closures manually, this is a JS feature that happens automatically.
// - We cannot access closed over variables explicitly.
// - A closure is Not a tangible JS object
// - <DEF> A closer is the closed over variable environment of the execution context in which a function was created, even after that execution context is gone
// - <DEF> A closer gives a function access to all the variables of its parent function, even after that parent function ahs returned. The function keeps a reference of its outer scope, which preserves the scope chain throughout time.
// - <DEF> A closer makes sure that a function does not lose connection to variables that existed at the function's birth place
// - <ANALOGY> A closer is like a backpack that a function carries around wherever it goes. The backpack has all the variables that were present in the environment where the function was created
// - <ANALOGY> A person never loses connection to the birthplace of the country the person was born. Person = Function, country is the parent scope, place in country is the variable
'use strict';

//<THEORY> In the CALL STACK
// - Order in which functions were called
//    1. Before Function is called, the function itself is stored in the Global EC is stacked onto CALL STACK   <GLOBAL SCOPE>
//    2. When the function is executed, a new EC is put on top of the existing Global EC for (1) 
//      (a) - Each EC has a variable environment, containing all its local variables. This variable environemnt is also the scope of this function
//      (b) - Function Scope gets it function scope as well as all the variables in the parent scope and global scope
//    3. After execution of the function EC, the function EC gets popped off for the call stack


//This function will create closure
const secureBooking = function() {     // 1. the function itself is stored in the Global EC is stacked onto CALL STACK. With its variable environment of passengerCount = 0 <---- (2b) passengerCount variable is varable in its own function scope
  let passengerCount = 0;

  return function() {
    passengerCount++; 
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();  // <---- 1. Booker is assigned with the secureBooking function and is stored in the Global EC <GLOBAL SCOPE now contains secureBooking function>
// 2b. secoreBooking function after being called will get its own function scope value and all the parent scope and global scope varaibles.
//<Note> Scope Chain (Order in which functions were written in the code)
//  - 1. Global Scope ( const booker = secureBooking <assigning function to a variable>) 
//  - 2. Function Scope ( secureBooking() being called )
//        - This function was assigned to a variable in the global scope 
//              -> hence when calling it it will have both the 
//                  1) function scope variable of passengerCount = 0
//                  2) And all variabel in parent scope and globale scope in this case will the the function: secureBooking() and the booker varaible which is the secureBooking()      

// Closure Happens Here
// - Closure makes a function remember all the varaiables that existed at the function's birthplace
// ie the secureBooking function is the birthplace if the booker function.
// - 1. When calling booker function, a new Booker function EC is created in the CALL STACK with emtpy variale environment
// - 2. A child scope is then put onto the SCOPE CHAIN, with its parent being the global scope of securebooking and booker function
// - 3. Closure happens here: A function has access to the variable environment of the execution context it which it was created

//       - So variable created in the secureBooking function is accessible by the booker function
booker(); // Closure here is the passengerCount variable, this variable is not in the current function scope but JS will find it in the closure (JS does this before the scope chain, JS has priority before Scope chain on this)
// Closer is used first over gloval variables is the same varaiable name is used.
// now closer: passengerCount = 1
booker(); // now closer: passengerCount = 2
booker();

// >>  Closures cannot be accessed, instead we can monitor it happening
//    - use: console.dir()
//    - look for: closer in the scopes in the console terminal
//    - console terminal: [[]]  meaning we cannot access from our code ie [[Scopes]]

console.dir(booker); // closure(secureBooking) <- meaning the closure is preserved by secureBooking function













