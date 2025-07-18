// JavaScript is a dynamically typed language, you dont have to tell what value should be stored in a variable
// = is assignment operator 
// Use Camel case for naming variables.

alert("a prompt message is going to appear after this ");                     // one time pop up message will appear on the website
let name = prompt("enter your name :" );                             // a pop up message will appear , but will accept some user input as well.
// input is always returned as a string datatype

console.log(name);                                                  // will print the prompt message in our console




console.log("Hello, World!")              // console.log is used to print on the console
console.log("Deepak Chauhan")


age = 20;
Name = "Deepak Chauhan";
x = null;                               // value is known , but empty
y = undefined;                         // value is unknown

console.log(age)                      // dont use double quotes here , we want to print the value of the variable and not the variable




// Keywords used to declare variables : let, var, constant 
// var = can be re-declared and updated, global scope variable . Used for variables that change
// {  code  } = this is one block. You can't redefine let within a block.





const a = "yuvraj";                   // const = neither can be re-declared nor updated. Used for final values.

let subject = "maths";              // let = can't be re-declared but can be updated , block scope (only accessible within curly braces),
subject = "physics";               // value of subject has been changed from maths to physics  
console.log(subject) 



// datatypes : number, string, undefined, null, bigint, symbol, boolean (7 primitive datatype)
// Non primitives are objects(collection of values).

let num = BigInt("123"); 
console.log(num)

let sym = Symbol("DeepakChauhan");
console.log(sym)


