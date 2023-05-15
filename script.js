// String Method Practice 
// - Splitting long input strings and store in array
// - Use for of loop to perform tasks on each element of the array
// - Destructure each of the element to variable names to be used later
// - Formatting output string using string methods ie .startsWith(), .replace(), .replaceAll(), .slice(start, end), .toUppercase(), .padStart()

// >> Decode this 
//  - It could be a data fetched by API
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// <STEPS>
//  - 1) Split the string by + to get the relative information for each departure and arrival (store in an array)
//  - 2) Destructure each of the array element to variables (use a for of loop to apply for each of the element)
//  - 3) Apply string methods to each 


// console.log(flights.split('+')); //Split each string from the + sigh and store each of them in a string

//Arrow function to return the string sliced from start to the letter before 3rd letter
const getCode = str => {
  return str.slice(0, 3).toUpperCase();  
}


for(const flight of flights.split('+')) { // Showing each of the string after splitting them by the + sign and storing to an array
  console.log(flight);
  const[status, from, to, time] = flight.split(';'); //destructure each element to be the varaibles of status, from, to, time
  // console.log(status);
  const output = `${status.startsWith('_Delayed')? '🔴': ''}${status.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}






