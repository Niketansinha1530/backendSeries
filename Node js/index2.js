//this file after index.js
//this require method not available inside javascript but only in Node js
const {addFn,subFn}=require('./math') //we can also destructue add use direct add and sub function

console.log(addFn(50,77));
console.log(subFn(80,77));


/* //for anonymous function
const math=require('./math')

console.log(math.add(8,7));
*/