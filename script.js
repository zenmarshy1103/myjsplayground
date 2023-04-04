// Object - Methods
//- Key: Value pair can be object and function(method) too
//- Create your own method for object where was an Array has their own methods hence an array can be thought as an object as well
//-
'strict mode'

const jason = {
    firstName: `Jason`,
    lastName: `Liu`,
    birthYear: 1989,
    job: `web developer`,
    friends: ['Allen', 'Han', 'Jim'],
    hasDriverLicese: true,

    //Add function (Method) to the object as a property - Name of function is the Key, value is the function expression
     //key: value (calcAge: function(birthYear))
    // calcAge: function(birthYear) {     
    //     return 2023 - birthYear;
    // }

    //Add Function (Method) using 'this' keyword 
    //- this keyword is equal to the object on which the method is called (equal to the object calling the method)
    //- ie: jason object is calling calcAge method, hence the 'this' keyword will point to the jason object
    //calcAge: function (){
        //console.log(this);   //this points to jason object
       // return 2023 - this.birthYear; //this.birthYear is getting the birthYear from he object that this function is in ie jason object
    //}

    //Add function (method) using 'this' keyword and store it as a property in the object
    calcAge: function (){
        this.age = 2023 - this.birthYear;  //adding age property to this object (refering to jason object) and assign it with 2023 - this.birthYear
        return this.age;
    },

    //Challenge Section - adding a checker to output 'has a driver's license' and 'has no driver's license'

    getSummary: function (){        
        //Remember tenary conditional expression can be added into a string!!! and make it neater!!!
        // Tenary Condintional:   <SYNTAX> conditional? trueExecute: falseExecute
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has${this.hasDriverLicese? 'a' : 'no'} driver's license.`
    }
}

//Executing the method from the object
//console.log(jason.calcAge(1989));   // Dot Notation
//console.log(jason['calcAge'](1989)); // Bracket Notation

//Executing the method from the object using the existing properties
//console.log(jason.calcAge(jason.birthYear));  //Violate - Dont Repeat Yourself, jason object is repeated twice in this code,


//Executing the method again after the this keyword has been implemented in the method
console.log(jason.calcAge());
console.log(jason.age)

//Challenge - output "Jason is a 34 years old web devloper, and he has a driver's license"
console.log(jason.getSummary());



