// For Loop - Looping through Arrays, Breaking and Continuing
//- More features for For Loop
//- Continue Statement: Exit the current iteration of the loop and continue to the next iteration
//- Break Statement: Completely terminate the whole loop
'strict mode'

//Looping through Array (output every element inside the array)
const jasonArray = [
    'Jason',
    'Liu',
    2023 - 1989,
    'web developer',
    ['Allen', 'Jim', 'Han'],
];
const types = [];  //creating an empty array to be used later

console.log(jasonArray.length) //finding the length of the array

for(let i = 0;  i < jasonArray.length; i++) {   //Counter starts at 0 and if condition ( counter is less than the length of the array) then runs the for loop
    console.log(jasonArray[i]);

    // types[i] = typeof jasonArray[i];  //Adding the type of data to the  empty types  array (method 1)
    types.push(typeof jasonArray[i]);    //Adding the type of data to the  empty types  array (method 2) - Using Push Method 
}

console.log(types);

//Another example of pushing data and doing calculation then add it to a new empty array
const years = [1989, 2021, 2022, 1978, 1981];
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages );

// Continue and break statement

//Continue Statement - Exit the current iteration of the loop and continue to the next iteration
console.log('-- ONLY STRINGS --')
for(let i = 0;  i < jasonArray.length; i++) {   //Counter starts at 0 and if condition ( counter is less than the length of the array) then runs the for loop
    if (typeof jasonArray[i] !== 'string') {
        continue; //exits the current iteration and go to the next iteration if the element is not a string type
    } else {
        console.log(jasonArray[i]);
    }     
}

//Break Statement - Completely terminate the whole loop
console.log('-- BREAK WITH NUMBER --')
for(let i = 0;  i < jasonArray.length; i++) {   //Counter starts at 0 and if condition ( counter is less than the length of the array) then runs the for loop
    if (typeof jasonArray[i] === 'number') {
        break; //breaks out of the for loop when the current iteration is pointing to the number type of the element
    } else {
        console.log(jasonArray[i]);
    }     
}



