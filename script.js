// Arrays - Methods 
//- Add element to array, remove element, 
//- Identify the position of an element
//- Checks if the element is in an array

const friends = [`Allen`, `Jim`, `Han`, 'William', 'Willie'];

//Push Method - Adds element to the end of an array
const newLength = friends.push(`Nick`);    //A function(method) call will result in a returned data, push method returns the length of the new array or after the element has been pushed to the existing array
console.log(friends);
console.log(newLength);

//Unshift Method - Adds element to the beginning of an array
friends.unshift('Leone')  //Return data of the unshift method is also the new length of the array after adding in the element to the beginning of the array
console.log(friends);

//Pop method - Removes the last element of an array
friends.pop();
const friendRemoved = friends.pop();  //Return data is the removed element
console.log(friendRemoved);
console.log(friends);

//Shift Method - Removes the first element of an array
friends.shift();
const shifted = friends.shift();  //Return data is the removed element
console.log(shifted);
console.log(friends);

//IndexOf Method - Identify the position of an element in an array
console.log(friends.indexOf(`Jim`));
console.log(friends.indexOf(`Frank`)); //If the element is not in the array, will return -1

//Includes Method - Returns Boolean True / False if the element is in the array (Strict Equality)
console.log(friends.includes(`Han`)); //True - is in the array
console.log(friends.includes('Wang')); //False - is not in the array
friends.push(23);
console.log(friends.includes('23')); //False Does not do coersion 
console.log(friends.includes(23)); //True

if (friends.includes('Han')) {
    console.log('You have a friend called Han');
}

