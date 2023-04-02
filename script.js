// Function calling other functions
// - Using function calling in a function is a way to not repeat you code.
// - Cleaner way of coding, and easier to change parameter or executing code for each function
// -

'strict mode'

function cutFruitPieces(fruit) { //A function to cut the fruit into 4 small pieces of the input fruit
    return fruit * 4;  
}

function fruitProcessor(apples, oranges) {
    applesPieces = cutFruitPieces(apples);  //calling the cutFruitPieces function
    orangePieces = cutFruitPieces(oranges);


    const juice = `juices with ${applesPieces} small pieces of apples and ${orangePieces} small pieces of oranges`;
    return juice;
}

const juiceProduct = fruitProcessor(2, 3);
console.log(juiceProduct);
