// Create a toggle button that changes the screen to dark mode when clicked & 
// on clicking it again, turns to dark mode 
// toggle : switching between two states 

let modeBttn = document.querySelector("#mode");

let currMode = "Ligt mode";

modeBttn.addEventListener("click", () => {
    if( currMode === "Light mode"){
        currMode ="Dark mode";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "Light mode";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});