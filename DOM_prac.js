// Create 3 divs with common class name box, access them and add some unique text to each of them 

let divs = document.querySelectorAll(".box");
console.log(divs);
console.log(divs[1]);                      // to access one element 

// divs[0].innerText = "NEW BOX1";
// divs[1].innerText = "NEW BOX2";
// divs[2].innerText = "NEW BOX3";


// using loop

let idx = 1;
for( div of divs){
    div.innerText = `new unique box $(idx)`;
    idx++;
}