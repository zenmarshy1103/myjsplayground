//The Switch Statement 
// - Another way of conditional statement
// - Used to compare one value through multiple different options.
// - Tidier and easier approach than if - else conditional statement (at times)

let whatIsToday = prompt(`What day is it today: `);

whatIsToday = whatIsToday.toLowerCase();
console.log(`Today is ${whatIsToday}`);

switch(whatIsToday) {
    //Case for if only monday 
    case 'monday':
        console.log('1. Plan for this week');   //Similar to if (monday)
        console.log('2. Work  Traininig');
        console.log('3. Weight Training')
        break;    //Break is needed if this is the only block to run for the case condition
    //Case for if wednesday or friday    
    case 'wednesday':
    case 'friday':         
        console.log(`1. Work Training`);
        console.log('2. Weight Training');
        break;  
    case 'tuesday':
    case 'thursday':
        console.log('1. Home Training');
        console.log(`2. Work Training`);
        console.log('3. Project Planning');
        break;   //Without Braek the all the code following will run through until the next break is met
    case 'saturday':
    case 'sunday':
        console.log('1. family Day');
        console.log(`2. Rest`);
        console.log('3. Junk Food Day');
        break
    default:  //Similar to else block ( else if day is not met for all the case conditions)
        console.log('Not a valid day! please enter a valid weekday')
}