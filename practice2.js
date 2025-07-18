// 1. Get user to input a number using the prompt "enter a number". Check if the number is multiple of 5 or not 

// let num = prompt("Enter a number: ");
// // console.log(num);

// if( num % 5 === 0){
//     console.log(num, "is a multiple of 5");

// }else{
//     console.log(num, "is not a multiple of 5");
// }








// 2. Write a code which can give grades to students according to their scores 
// 90 - 100 : A
// 70 -89 : B
// 60-69 : C 
// 50-59 : D 
// 0-49 : F 


let score = prompt("Enter your score to chexk your grade :")
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
} else if(score >= 70 && score <= 89){
    grade = "B";
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else if(score >= 0 && score <= 49){
    grade = "F";
}

// we can completely skip else statement at the end 

console.log("As per your scores, you grade is :", grade);