// 1. for a given array with marks of students = [45,67,89,56,23,90]
// Find the  average marks of the entire class

let marks = [45, 67, 89, 56, 23, 90];

let sum = 0;
for(let val of marks){
    sum += val;
}

console.log("average =", sum/marks.length);







// 2. For a given array with prices of 5 items = [200, 300, 450, 120, 245],
//    All the items have an offer of 10% on them,
//    change the array to store the final proces after applying the offer

let items = [200, 300, 450, 120, 245];      

// here , we have to change the value based on index , hence we cant use for of loop


for( let i = 0; i < items.length; i++){
    let offer = items[1]/10;
    items[i] -= offer;

}


console.log(items);

