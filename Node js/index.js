// console.log("Hi I am running from package.json file");

/*
function addFn(a,b){
    return a+b;
}

console.log (" sum = ", addFn(10,80));
*/
// If i write this addFn(a,b) function in different file then how can I access this file (answer is require keyWord)

/*
console.log (" sum = ", addFn(10,80));  //without importing addFn this line through error of addFn is not defined.


// So now we need to import the file math where addFn is defined .
*/
const math=require('./math')

// console.log (" sum = ",addFn(10,80));

// console.log(math);//this only through empty object {} because we never export any thing from math.

// { addFn: [Function: addFn], subFn: [Function: subFn] }


 console.log("Sum = ",math.addFn(50,45)); // after exporting addFn from math.js 
 console.log("Sub = ",math.subFn(50,45)); // after exporting subFn from math.js 

//  this is all modular structure.