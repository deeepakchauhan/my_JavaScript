// SYNCHRONOUS : 
// It means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution 

// ASYNCHRONOUS : 
// Due to sync programming, sometimes imp instructions get blocked.
// Hence, to avoid this , async code is used. 


// CALLBACKS : 
// A callback is a function passed as an argument to another function.


// CALLBACK HELL : 
// Nested callbacks stacked below one another forming a pyramid/doom structure.


// PROMISES : 
// It is meant for eventual completion of task.
// resolve, and reject are two handlers, automatically created in JavaScript.
// It is an object in JS, and also a solution for callback hell.
// STATES : pending, fulfilled(resolved), rejected.


let promise = new Promise((resolve, reject) => {                             
    
    console.log("This is a promise function");
     resolve("deepak chauhan");                                             // fulfilled state, and deepak chauhan is promise result
    // reject("some error occured");                                       // will generate as an error 
});



console.log(promise);



// functions to use PROMISES : 
// promise.then() = if you want to perform any work after fulfulling the promise 
// promise.catch() = if you want to perform any work after promise is rejected 


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("this is a promise ");
        // resolve("success");
        reject("there is an error");
    });
};


let result = getPromise();

promise.then(() => {
    console.log("promise is fulfilled");
});

promise.catch((err) => {
    console.log("rejected", err);
});