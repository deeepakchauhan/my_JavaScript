// Create a function that takes string as a  parameter.
// returns the number of vowels in the string.

function countVowels(str) {
    let count = 0;
    
    for(const char of str){
        if (char === "a" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
}

      console.log(count);
}

countVowels("deepakchauhan");