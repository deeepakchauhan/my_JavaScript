// DOCUMENT OBJECT MODEL : 
// DOM is away to access HTML in JavaScript
// When a web page is loaded, the browser creates DOM of the page 
// Window => Document => html 
// (tree like structure, each boxes represents nodes, and each nodes represents objects).
// types of nodes in DOM tree : text nodes, comment , and elements
// we work with only element nodes 


// Window Object : represents an open window in a browser. 
// It is browser's object, automatically created by the browser
// it is a global object

console.log(window);
console.log("DEEPAK CHAUHAN");
window.console.log("deepakchauhan");                  // console.log is actually apart of window object 
window.console.log(document);                        // will print our html file
console.dir(document);                              // will print the properties and methods of our html file (object)
console.dir(document.body)                         // for accessing body object





// DOM MANIPULATIONS :

// 1. selecting with id : documnet.getElementById("myid")

let heading1 = document.getElementById("header");
console.log(heading1);
console.dir(heading1);                                                // to access the object


// 2. selecting a class : document.getElementsByClassName("myclass")

let heading2 = document.getElementsByClassName("heading");          // returns an html collection (similar to array)
console.dir(heading2);


// 3. Selecting with tags : document.getElementsByTagName("p")

let para = document.getElementsByTagName("p");
console.dir(para);



// 4. Query Selector : document.querySelector("myId / myClass / tag")
// will return the first element

let selQ = document.querySelector("p");            // will return the 1st paragraph tag
console.dir(selQ);


let allElm = document.querySelectorAll("p");       // for all paragraph tags, will print as NodeList
console.dir(allElm);

let allClas = document.querySelector(".heading");
console.dir(allClas);






// PROPERTIES : used to access our elements 

// 1. Tag name : returns tag for element nodes

let a = allClas.tagName;
console.log(a);

// 2. innerText : returns the text content of the element and all its children

console.log("Heading Text:", selQ.innerText);              


// 3. innerHTML : returns the  plain text or HTML contents in the element



// 4. textContent : returns textual content even for hidden elements 






// DOM ATTRIBUTES :

// 1. getAttribute(attr) : get the attribute value

let div = document.querySelector("#deev");
console.log(div);

let my_id = div.getAttribute("id");
console.log(my_id);                                             // will return the name of the id

// 2. setAttribute(attr, new value) : to set an attribute 

let my_id2 = div.setAttribute("id","newid");                  // you will see the change in the element section    
console.log(my_id2);




// STYLE :
// node.style : to change the style of an element 
// it is basically inline styling 

let div2 = document.querySelector("#newid");
let style = div2.style;                                   // don't use parentheses here
console.log(style);                                      // will print an object which contains the styling of the div

div.style.backgroundColor = "purple";                   // will change the color of the div to purple
div.innerText = "deepakchauhan";










