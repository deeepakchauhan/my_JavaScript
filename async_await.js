// ASYNC -  AWAIT : 

// async functions always return a promise , and 
// await pauses the execution of its surrounding async function until the promise is returned 

async function hello() {
    console.log("deepakchauhan");
    
};

console.log(hello());                       // will automatically return a promise 






function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        },2000);
    });
}; 




// async - await :

async function getAllData() {                               // we need to put the above code in a function
    console.log("getting data1.......")
    await getData(1);
    
    console.log("getting data2.......")
    await getData(2);
    
    console.log("getting data3.......")
    await getData(3);
    
    console.log("getting data4.......")
    await getData(4);
    
    console.log("getting data5.......")
    await getData(5);
    
    console.log("getting data6.......")
    await getData(6);

    
}


getAllData();
