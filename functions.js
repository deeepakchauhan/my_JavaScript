// FUNCTIONS :

// use parentheses to invoke the function
// functions can be passed as parameter in JS


function myFunction() {                                // defining the function
    console.log("Welcome to my Function");
    console.log("i am learning function");
}

myFunction();                                       // calling the function, to do the work 




// input dependent function, input is the parameter 

function my_Function(message) {
    console.log(message);
    
};

my_Function("my name is javascript");            // we are passing argument




// using return keyword : will not print the value, but return the value

function sum(a, b){                           // a,b acts as function's local variable, valid within the curly braces only
    s = a + b;                               // anything written after return keyword will not be executed 
    console.log("before return");
    return s;                               // returns only one value at a time 
};

let val = sum(5,6);
console.log(val);                    




// ARROW FUNCTIONS : comapct way of writing a function

const arrowSum = (a,b) => {            // arrow function is the RHS part
    console.log(a+b);
};

arrowSum(4,5);
console.log(arrowSum);              // will print the entire definition of the function





// forEach Loop in Arrays : mainly used in arrays, they are higher order functions/methods.

// it is actually a method
// arr.forEach(callBackFunction) :  a call back is a function passed as an argument to another function.
// parameters used in callBackFunction ; values, index, array itself

let arr = ["deepak", "charles", "lewis", "verstappen"];

arr.forEach(function printVal(val, index) {              // curly braces are insde parentheses 
    console.log(val.toUpperCase(),index);
});


















