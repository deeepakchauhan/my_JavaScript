// STRINGS :
// # Strings are immutable in JavaScript

str = "Deepak Chauhan";

console.log(str.length);          // will print the lenght of the string
console.log(str[4]);             // will print character at index 4



// TEMPLATE LITERALS : 
// strings created using backticks,
// datatype is strings, but using backticks

let specialString = `this is a template literal`;          
console.log(specialString);


// 1. String Interpolation : we can embed variables or expressions directly inside a string using ${...}.

let name = "Deepak";
let greeting = `Hello, ${name}!`;
console.log(greeting); 

// 2. Escape Characters : 
// \n : next line, \t : next tab

console.log("My name is : \n Deepak Chauhan");                  // whatever is written after backslash, will be printed on the next line









// STRING METHODS : 
// built-in functions to manipulate a string

//1.str.toUpperCase() and str.toLowerCase :
//  will return a copy , without reflecting the change in the original variable

let fullname = "deepakchauhan";
let surname = "CHAUHAN";

a = fullname.toLocaleUpperCase();
console.log(a);                      // DEEPAKCHAUHAN
b = surname.toLocaleLowerCase();
console.log(b);


console.log(fullname);



//2. str.trim : removes whitespaces (starting and ending both)

let para = "             this      is  a paragraph       ";
c = para.trim();
console.log(c);


//3. Slicing : str.slice(start,end) #ending is non-inclusive

let email = "deepakchauhan19dk@gmail.com";

let newMail = email.slice(2,15);
console.log(newMail);


//4. Concatenation : str1.concat(str2)

let name1 = "Scuderia ";
let name2 = "Ferrari";

// let combName = name1.concat(name2);
// console.log(combName);

let combName = name1 + name2;              // we can add multiple strings as well
console.log(combName);


//5. Replace method : str.replace(searchVal, newVal)
// search first, then replace

let strName = "String Name";
let newStr = strName.replace("n", "d");    // one time replacement
console.log(newStr);


// 6. Character at method : str.charAt(idx)
// to find what character is at an index

let sport = "Formula1";
let sport_idx = sport.charAt(4);
console.log(sport_idx);




