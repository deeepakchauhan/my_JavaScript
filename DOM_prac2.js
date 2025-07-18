// 1. Create a new button element , give it a name ,add some styles to it 
// insett the button as the first element inside the body tag.

let bttn = document.createElement("button");
console.log(bttn);

bttn.innerText = "Hey!, just double tap";
bttn.style.color = "red";
bttn.style.backgroundColor = "yellow";

document.querySelector("body").prepend(bttn);



// 2. Create a paragraph tag in HTML, add some styling to it 
//    create a new class in css and try to append this class to the paragraph element


let para = document.querySelector("p");
console.log(para);
para.getAttribute("class");
para.setAttribute("content", "newcontent");             // properties of newcontent will get applied to this para now (completely overwrite)


// using classList : 
// collection of class attributes of the element 

console.log(para.classList);

// to add a new class : node.classList.add(" ")
let newPara = para.classList.add("newcontent");
console.log(newPara);

console.log(para.classList);                       // in this case ; length will be 2