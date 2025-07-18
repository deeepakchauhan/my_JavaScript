// ARITHMETIC OPERATORS :

let a = 15;
let b = 6;

// console.log(a+b)
// console.log("a + b = ", a+b)

console.log("a =",a ," & b = ", b);
console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a % b =", a % b);
console.log("a ** b =", a**b);                        // a raised to b



// UNARY OPERATORS : increament(++) and decreament(--)

// a ++ = a+1, a -- = a-1
// a++ is post increament , and ++a is pre increament 

// console.log("++a =", ++a);                      // change first, print later
// console.log("a++ =", a++);                     // change later, print first (from next line onwards , will print the updated value,here 16)
// console.log(a);


// ASSIGNMENT OPERATORS :

// a += 1 is same as a = a+1
// Similarly for -=, *=, /=, %=, **=

// a += 1;

// a *= 2; //30

// console.log(a);



// COMPARISON OPERATORS :

// 1. equal to : ==
// 2. not equal to : !=
// 3. equal to and type : === (stricter version of equal to)
// 4. not equal to and type : !==

console.log("15 == 6", a==b);             // Will return a boolean value  

let c = 5;
let d = "5";
console.log("5 == '5' ", c == d);       // since number is entered in the string, so automatically js will identify it as a number
console.log("5 === '5' ", c===d);      //  false ; === compares the datatype as well





// LOGICAL OPERATORS :

// 1. Logical AND : && 
// 2. Logical OR : ||
// 3. Logical NOT : !

let e = 10;
let f = 20;

cond1 = e>f;                               // false
cond2 = e == 10;                          // true
console.log("cond1 && cond2", cond1 && cond2);    
console.log("cond1 || cond2", cond1 || cond2);
console.log("! e>f", !(e>f));           // true 



// TERNARY OPERATORS : operates on three operands 

// operands are : condition? true output:false output

let age = 15;

// let result = age > 18? console.log("adult") : console.log("teenager");    // comapct if-else


let result = age > 18? "adult": "teenager";          // preffered method
console.log(result);                                  