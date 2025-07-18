// LOOPS : 
// # avoid infinite loop 



// 1. for loop :

for (let i = 1; i <= 5; i++){                    // let i=1 is initialisation statement, second statement is stopping condition,
    console.log("i = ", i);                     // third statement is updation, and i is only defined in this loop(since let is used).
}                                              // with the curly braces, we enter the work, that has to be executed
                                              
console.log("Loop has ended");




// to calculate the sum of first n natural numbers : 

let sum = 0;
let n = 100;
for( let x = 1; x <= n; x++){
    sum += x;                            // everytime x will get added to sum.
    
}
console.log("sum = ", sum);




// 2. While loop :

// initialisation is done before the loop, and updation is done within the loop

let j = 1;
while(j <= 5){
    
    console.log("j = ", j);
    j++;
}





// 3. do-while loop :
// will run atleat once
// condition is applied later on

let y = 1;

do{
    console.log("y = ", y);
    y++;
} while(y <= 5);





// 4. for-of Loop : used to iterate over strings and arrays 

let str = "DEEPAK CHAUHAN";
let size = 0;                                      // will print the lenght of the string

for(let val of str){                              // iterator iterates over each letter in the string 
    console.log("value = ", val);                // initialisation, stopping condition, and updation occurs automatically 
    size++;
}

console.log("string size =", size); 





// 5. for-in Loop : used for objects

// first, let's create an object 


let student = {
    name : "Deepak Chauhan",
    age : 20,
    gpa : 3.5,
    isPass : true,
};


for (let key in student){                                       // Returns the keys of an object.
    console.log("key =", key, "value =", student[key]);        // will return key value pair
}



