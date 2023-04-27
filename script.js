// Primitives vs Objects (Primitive vs Reference Types)
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