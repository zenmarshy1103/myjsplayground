// Primitives vs Objects (More Examples)
// - Object.assign(destination, from) - Merges two arrays together but shallow copy will not copy and assign new memory in the heap for objects (arrays) inside objects
// - Primitive Values - Stored in the CALL STACK with identifier, memory address and value
// -                  - Only primitive value set as constant is immutable
// - Reference Values - Stored in the HEAP with memory address and value.
//                    - referencing values are stored in the HEAP even when set as constant you still can change it ( >> NOTE: we are not changing the value at the address in the CALL STACK but in the ADDRESS of the HEAP)
// - IMPORTANT: Objects - The varaiable of the object is stored in the CALL STACK With an idenfier of the object variable name , memory address and the value which points to the address of the HEAP (REFERENCING to the HEAP ADDRESS) 
// -                    - Object attributes are values stored in the HEAP with an address then the object variable in the CALL STACK with an address points to the value which references the HEAP address that have he value of the object attributes

'use strict';

// >> Primitive Value (Numbers, Strings, Boolean etc)
//      - Stored in the CALL STACK with identifier, memory address and value
//      - The identifier points to the address not the value 
//      - The value at / set at a certain memory in the CALL STACK is immutable (CANNOT BE CHANGED)
let age = 30;  // Identifier: age,  address: 0001(example), value: 30. ( >> NOTE: Age points to the memory address which hold the value of 30)
let oldAge = age; //Assign age = 31 to old age, ( >> NOTE: old age identifer is pointing to the same address as age hence the value at the address is 30)
age = 31;         // change age in let age = 30 to 31 ( >> NOTE: NEW piece of memory is created with a new address and stores the value 31)
console.log(age);
console.log(oldAge);

// >> Reference Value (Objects, Arrays etc)
//      - Stored in the HEAP with memory arress and value.
//      - The varaiable of the object is stored in the CALL STACK With an idenfier of the object variable name , memory address and the value which points to the address of the HEAP (REFERENCING to the HEAP ADDRESS)
//      -
const me = {                   // CALL STACK - Identifier: me, Address: 0003(Example), Value: D30F(example)  <-- HEAP memory address       
    name: 'Jason',             // HEAP - Address: D30F(example), value: { name: 'jason', age: 30;}
    age: 30,
};

// Source of confusion - friend and me are still referencing the me object
//      - Only primitive value set as constant is immutable
//      - Referecing value values are stored in the HEAP even when set as constant you still can change it ( >> NOTE: we are not changing the value at the address in the CALL STACK but in the ADDRESS of the HEAP)
//      - Copying a object to a variable is the same as assigning a new idenfier / varaible that points to the same addrss of the copied object.
const friend = me;               // CALL STACK - Identifier: friend ADDRESS: 0003(Example), Value: D30F
friend.age = 27;                 // HEAP - Address: D30F(example), value: { name: 'jason', age: 27;} <-- We just change the value of the age to 27 in the HEAP which is still being referenced by the me and friend identifier in the CALL HEAP
console.log(`friend:`, friend);  // RESULT: 
console.log(`friend:`, me)       //     - <CALL STACK> Identifier: me, ADDRESS: 0003(Example), Value: D30F
                                 //     -       <HEAP> ADDRESS: D30F, VALUE: {name: 'jason', age: 27}
                                 //     - <CALL STACK> Identifier: friend, ADDRESS: 0003(Example), Value: D30F
                                 //     -       <HEAP> ADDRESS: D30F, VALUE: {name: 'jason', age: 27}
                                 
// >> MORE EXAMPLES
// Primitive Types
let lastName = 'Jia';
let oldLastname = lastName;
lastName = 'Liu';
console.log(lastName, oldLastname);

// Reference Type
const faye = {
    firstName: 'Faye',
    lastName: 'Jia',
    age: 2023 - 1993,
};

const marriedFaye = faye; // creating a new variable name that points to the same CALL STACK address of faye object.
marriedFaye.lastName = 'Liu'   // Changes the properties stored in the HEAP which is being pointed to by the object variable name of both faye and marriedFaye
console.log('Before Marriage:', faye);
console.log('After Marriage:', marriedFaye);

// Reference Type - Coping Objects (Object.assign())
// - Merging two objects together

const faye2 = {
    firstName: 'Faye',
    lastName: 'Jia',
    age: 2023 - 1993,
    family: ['Cyrus', 'Claire', 'Clara']      
};

const faye2Copy = Object.assign({}, faye2); // Merging an object to an empty object (Shallow copy not a deep clone meaning it will not copy an object stored in an object )
faye2Copy.lastName = "Liu";
// console.log('Before Marriage:', faye2);
// console.log('After Marriage:', faye2Copy);

//The family array (object) is stored in the HEAP which is not copied using the Object.assign() - It is still being pointed to by the Heap Memory
faye2Copy.family.push('Jason')   //Is pushing on an element onto the array which is being referenced by both faye2 and faye2Copy so both has the same array (Due to the fact that both are referencing to the array object which was not copied in the first place)
console.log('Before Marriage:', faye2);     
console.log('After Marriage:', faye2Copy);



