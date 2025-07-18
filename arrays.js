// ARRAYS :  

// linear way for collection of items (generally same type of information)
// array is a special type of object
// stores index : value pairs 
// arrays are mutable


let names = ["deepak", "yuvraj", "charles", "lewis", "oscar"];          
console.log(names);                                              // will twll the size of an array as well



//  ARRAY indices :
console.log(names[2]);

names[2] = "Verstappen";                                      // this change is reflected in the original array
console.log(names);




// Looping over an ARRAY :
// # idx < array.length

// using for loop
let drivers = ["carlos", "alex", "nico", "kimi", "george"];

for( let idx=0; idx < drivers.length; idx++){
    console.log(drivers[idx]);
}


// using for-of loop
let cities = ["panaji", "surat", "delhi", "baroda", "kolkata"];
for (let val of cities){
    console.log(val.toLocaleUpperCase());
}




// ARRAY METHODS :
// 1. Push() : used to add at the end

let fruits = ["mango", "papaya", "grapes", "kiwi"];

fruits.push("pomoegranate");
console.log(fruits);


// 2. Pop() : used to delete items from the end of the array and return

let deleted_fruit = fruits.pop();
console.log(fruits);
console.log("deleted fruit is :", deleted_fruit);              // pomoegranate


// 3. toString() : coverts an array to a string

let str_fruits = fruits.toString();
console.log(str_fruits);


// 4. concat(); joins multiple arrays and returns result.
// does not bring any changes to the original array.

let seasons1 = ["summer", "winter", "spring", "rainy"];
let seasons2 = ["autumn", "fall", "monsoon"];
let months = ["june","october","february"];

let comb1 = seasons1.concat(seasons2);
let comb2 = seasons1.concat(seasons2, months);

console.log(comb1);
console.log(comb2);


// 5. unShift() : adds items to the start 

let sports = ["cricket", "tennis", "rugby", "baseball"];
sports.unshift("F1");

console.log(sports);


// 6. shift() : delets the element from the start

sports.shift();
console.log(sports);


// 7. slice() : returns a peice of the array
// dont bring chages to the original array

let num = [ 2,4,6,8,19,34,67,90];
let sliced_num = num.slice(2,6);      // end value is non-inclusive

console.log(sliced_num);



// 8. splice() : used to (add, remove, replace), in the original array
// splice(start idx, delete count, new element add)

let cars = ["ferrari", "mercedes", "toyota", "aston martin", "audi"];

cars.splice(2, 0, "hummer");  // changes come in effect at index 2, zero deletion, and hummer will get addedat inx 2
console.log(cars);

cars.splice(2);
console.log(cars);             // will slice all the elements from index 2s




// IMPORTANT ARRAY METHODS :

//1. MAP : 
// creates a new array using some returned value
// the value its callback returns are used to form a new array
// arr.map(callbackfunc(value, index, array))

let numbers = [1, 4, 5, 6, 8, 9, 20];

// numbers.map((val) => {
//     console.log(val);

let newNumbers = numbers.map((val) => {
    
    return val * val;
});

console.log(newNumbers);



// 2. FILTER : 
// creates a new array after filtering out the conditions given

let numbrs = [1, 4, 5, 7, 8, 9, 12];

let newNumbrs = numbrs.filter((val) => {
    return val % 2 !== 0;
});

console.log(newNumbrs);




// 3. REDUCE :
// performs some operations and reduces the array to a single value .
// Returns that single value 

let arr1 = [2,4,6,8];

const output1 = arr1.reduce((res, curr) => {
    return res + curr;                               // res keeps updating
});

console.log(output1);


let arr2 = [10,50,25];

const output2 = arr2.reduce((res, curr) => {
    return res > curr ? res : curr;                       // if result is greater than current, then return res  

});

console.log(output2);       //50





