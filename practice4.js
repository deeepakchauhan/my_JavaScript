// Create a game , where you start with any random number,
// ask the user to guess the number until reaches the correct value 

let gameNum = 25;
let guess = prompt("guess the corrrect number:");

while(guess != gameNum){                                  // dont use == here
    guess = prompt("wrong guess, try again!: ");
    
}

console.log("Congratulations!, You have guessed the right answer");