//                  ERROR    HANDLING      :

// using try-catch method 


let a = 6;
let b = 4;

console.log("a =", a);
console.log("b =", b);

console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a+b =", a+b);


try {
    console.log("a-b = ", a-c); 
}catch(err) {                              // will handle our error, and will help in executing our further code 
    console.log(err);                                   

}



// console.log("a-b = ", a-c);           // this will give an error , and will stop the further execution of th code
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a+b =", a+b);
