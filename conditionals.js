// CONDITIONAL Statements : to implement some conditions in the code 

let age = 10;

// 1. if Statement 
if (age >= 18){
    console.log("eligible to cast vote");
}

if (age < 18){
    console.log("not eligible to cast vote");
}

let mode = "dark";
let color;

if( mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);



// 2. if-else statement 

if( mode === "dark"){
    color = "black";
} else{
    color = "white";
}

console.log(color);



// 3. else-if statements 

let AGE = 40;

if( AGE< 18){
    console.log("Junior");
}else if(AGE > 30){
    console.log("senior");
}else{
    console.log("Middle");
}

