// For Loop - Looping Backwards and Looping in Loops
//- Loop over array backwards
//- Loop inside a Loop (Nested Loops)
//- 
'strict mode'

const jason= [
    'jason',
    'Liu',
    2023 - 1989,
    'web developer',
    ['Allen', 'Han', 'Jim']
];

// Loop over array backwards
// index: 4, 3, 2, 1, 0
for (let i = jason.length-1; i >= 0; i--) {
    console.log(i, jason[i]);
}

// Create a loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(` > Exercise ${exercise} - Lifting weight repetition ${rep}`);
    }
}



