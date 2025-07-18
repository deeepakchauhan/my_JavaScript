// 1. given an array of marks of students, filter out the marks of students who scored above 80

let marks = [20,86,89,97,92,100,39];

let toppers = marks.filter((val =>{
    return val > 80;
}))

console.log(toppers);



// 2. Take a number as user input n, create an array of numbers from 1 to n.
//    use array methods to calculate the sum and product of all numbers in the array.

let n = prompt("Enter a number  :");
let userArray = [];

for(i = 1; i <= n; i++) {
    userArray[i-1] = i;        // 1[0], 2[1], 3[2],.......

}

console.log(userArray);



// SUM :
let userArray2 = userArray.reduce((res, curr) => {
    return res + curr;
});

console.log(userArray2);


console.log(userArray);




// PRODUCT :
let userArray3 = userArray.reduce((res, curr) => {
    return res * curr;                                        // factorial
});

console.log(userArray3);
