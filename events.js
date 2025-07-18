// E     V     E     N     T     S : 

// It is the change in the state of an object
// events are fired to notify code of "interesting changes", that may affect the code execution (event handling)


// EVENT HANDLING : node.event = () => {      handle here       }
// Priority : JavaScript >>> Inline code 
// can't access to multiple handlers, second one will overwrite the first one 


// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
// };


let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("you are inside a div box");

};



// // EVENT OBJECT :
// // special object that has details about the event (type, target, and some other background information)
// // all event handler's have access to the Event Object's properties and methods 
// // node.event = (e) => {   // handle here  }

// btn1.onclick = (e) =>{
//     console.log(e);                                  // will print event object
//     console.log(e.type);                            // will print the type of event, here it is "click"
//     console.log(e.target);                         // will print the target of event, here it is button
//     console.log(e.clientX, e.clientY);


// };





// EVENT LISTENERS : 
// node.addEventListener(event, callback); callback is function, it is also event handler
// node.removeEventListener
// enables us to do multiple work on the same event 



// to add 
btn1.addEventListener("click", (e) =>{
    console.log("button as clicked");
    console.log(e);
    console.log(e.type);
});

let div = document.querySelector("div");




// to remove : callback reference should be same 
const handler2 = () =>{
    console.log("button was clicked on handler3");

};
btn1.addEventListener("click", handler2);

btn1.removeEventListener("click", handler2);                   // handler2 will not get printed now 