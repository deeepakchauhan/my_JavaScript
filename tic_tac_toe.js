// TIC     TAC     TOE     :

let boxes = document.querySelectorAll(".box");                             // to access all the boxes 
let resetBttn = document.querySelector("#reset");


let turnO = true;

let winPatterns = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9],
   
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    console.log("Box was clicked");
    if(turnO){                                    // turn of player O
        box.innerText = "O";
        turnO = false;
        
    }else {                                    // turn of player X
        box.innerText = "X";
        turnO = true;

    }
    box.disabled = true;

    checkWinner();
    });

});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2].innerText]);


    }
}





