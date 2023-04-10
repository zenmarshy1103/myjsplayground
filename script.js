// While Loop
//- The block will only execute when (while) the condition is true
//- Counter need to be declared outside the while loop block (when Needed)
//- Increment/decrement need to be put inside the while loop block (when Needed)
//- Use when looping without the need of counter and incremented when trying to solve or execute anything without a counter or increment / decrement
'strict mode'

//For Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);    
}
console.log(`------- End of For Loop -------`)

//Implementing the above for loop using while loop
// While Loop - only specify the condition
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++
}
console.log(`------- End of While Loop -------`)

// Example that does not depent on counter and counter increment or decrement
let dice = Math.random() * 6; //calling Build-In Math function Outputs a decimal dumeber between 0 to 1 (multiplying 6 meaning will get from 0 - 6)
dice = Math.trunc(dice) + 1;  //Truncating the decimal places (outputs 0 - 6),
// console.log(dice)

if (dice === 6){  //Added to check if 6 is rolled at the first time
    console.log(`6 Is rolled, Loop eneded`);
}

while (dice !== 6) {
    console.log(`Rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6){
        console.log(`6 Is rolled, Loop eneded`);
    }
}
