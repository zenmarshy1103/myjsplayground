//Activate strict mode 
//- ENSURE - TO HAVE THIS MODE TURNED ON ALL THE TIME!!!
//- To have more secure code to avoid accidental bugs, it forbids the developer to do certain things
//- Create visible errors in certain situation where as without it JS will fail silently without letting the developer know the mistake made

'use strict';  //Helps us to debug 

let hasDriversLicense = false; 
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive'); 


// The following variable names are reserved in JS, using strict mode, JS console will let the develop know that these are reserved words.
// const interface = 'Audio';
// const private = 999;

