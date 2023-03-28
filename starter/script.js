// Type Coercion
// - happens when the operatore is dealing with two values with two different types
// - behind the scene convert one of the values to match the other value.

console.log(`I am ` + 23 + ` yers old`);  //converts int 23 to str behind the screen
console.log(`23` - `10` - 3);   // OUTPUT: 10
console.log(`23` + `10` - 3);   //OUTPUT: 2307

//guess
let n = `1` + 1;
n = n - 1;
console.log(n)  

//my guess: 10   (OUTPUT: 10 ) -- correct