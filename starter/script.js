// The Conditionals (Ternary Operator)
// - Another way of if-else statement when the code being executed of the conditional is simple and not complicated
// - Can be confusing but once understood it is very useful is come cases.
// - SYNTAX: variable = if statement ? if true execute this : else execute this

var age = prompt('What is your age? ')

const drink = age >= 18 ? "wine": 'water';
console.log(drink);

//The above is similar to the following If-ELSE Statement

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine": 'water'}`)