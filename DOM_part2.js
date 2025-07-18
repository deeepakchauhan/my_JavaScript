// CONTINUE......



// INSERTING A NEW ELEMENT 

// let el = document.createElement("div")
// first you have to decide the node, where the changes has to be done 

// 1. node.append(el): adds the element at the end of the node(inside)

let newBttn = document.createElement("button");
console.log(newBttn);

newBttn.innerText = "click me";

let div = document.querySelector("#list");
console.log(div);

div.append(newBttn);




// 2. node.prepend(el): adds the el at start of the node (inside)

let newHeading = document.createElement("h1");      // here, we need to enter the name of the HTML tag
console.log(newHeading);

newHeading.innerText = "DEEPAKCHAUHAN";

let newhead = document.querySelector("#heading");
console.log(newhead);

newhead.prepend(newHeading);





// 3. node.before(el) : adds before the node (outside)

let header = document.createElement("p");
console.log(header);

header.innerText = "Hello, My name is Deepak Chauhan";

document.querySelector("body").before(header);





// 4. node.after(el): adds after the node (outside)

let endPara = document.createElement("footer");
console.log(endPara);

endPara.innerText = "Hello, This is the footer of this webpage";

document.querySelector("body").after(endPara);





// DELETE AN ELEMENT : 
// node.remove() : removes the node

let para = document.querySelector("p");               // REFER LINE 43 :))
para.remove();                                       // dont forget to use the parentheses



