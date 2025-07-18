//                                         FETCH      API    : 

// APPLICATION PROGRAMMING INTERFACE : 
// It provides an interface for fetching(sending/receiving) resources.
// It uses Request and Response objects (Request-)
//fetch() method is used to fetch a resource (data), and it returns a promise 
// let promise = fetch(url, [options])
// when we dont send any options, then fetch method creates GET request (which recieves data from api's) 


// IMPORTANT TERMINOLOGIES :

// AJAX : Asychronous JS and XML
// JSON : JavaScript Object Notation (used in modern API's) 
// json() method is used to convert json to JavaScript object, returns a second promise 
// in this method, input is json, and output is JS object.




const URL = "https://jsonplaceholder.typicode.com/comments";

let promise = fetch(URL);

console.log(promise);

const printComment = document.querySelector("#comment");


// Executing api calls : 

const getComments = async () => {
    console.log("Getting Data........");
    let response = await fetch(URL);                                      // because this work might take some time 
    console.log(response);                                               //json format
    
    let data = await response.json();                                   // json is asynchronous, hence it has to wait for some time  
    console.log(data[5]);                                              // usable data
    
    printComment.innerText = data[5].text;                         // data will be printed on the webpage

    // console.log(response.status);                       // will print http response code ; 200 means success, 400 is bad request 
};


getComments();  













