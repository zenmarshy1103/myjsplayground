// Functions - How Passing Argument works (Value vs Reference)
// - PRIMITIVE TYPE value is copied so original is not affected
// - OBJECT TYPE value will be referencing(pointing) to the same object in the memory heap 
// - Passing in OBJECT into a FUNCTOIN can be troublesome in some cases 
// - JavaScript Only has pass in by Value (Does not have pass in by reference capability)
//          -> Even though passing in OBJECT seems like passing in by reference but
//          -> what is being passed in is the value that contains a memeory address

'use strict';

const flightNumber = 'LH234';
const jason = {
    name: 'Jason Liu',
    passport: 123456789,
};

const checkIn = function(flightNum, passenger) {   
    flightNum = 'LH999';
    passenger.name = `Mr.` + passenger.name    //OBJECT - is Reference Type, this will change the jason object as they are the same object in the MEMOTY HEAP
    
    if (passenger.passport === 123456789) {
        alert('Checked In');
    } else {
        alert('Wront Passport');
    }
};

checkIn(flightNumber, jason); //flightNum = flightNumber,  so PRIMITIVE value is copied 
console.log(flightNumber);   // The original flightNumber is not changed what is chaged is the flightNum variable
console.log(jason);    

// The Above is the same as doing:
const flightNum = flightNumber;
console.log(flightNum);
const passenger = jason;  //Passenger and jason are pointing to the same object in the memory heap
console.log(passenger);

// <NOTE> Passing in OBJECT into a FUNCTOIN can be troublesome in some cases 
// - the original object attribute will be changed if the function manipulates the attributes and does some arithmetics
// EXAMPLE

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000);  
}

newPassport(jason);   //person param is pointing the the jason object so they are the same object
checkIn(flightNumber, jason);
console.log(jason.passport);   //the passport attribute changes as the newPassport function is called

