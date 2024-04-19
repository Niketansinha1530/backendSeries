function addFn(a,b){
    return a+b;
}
function subFn(a,b){
    return a-b;
}
/* //module.exports write only one time
module.exports=addFn;
module.exports=subFn;//this statement overwrite before one.
*/
// for not overwrite we export object


module.exports={
addFn,
subFn
}

/*
exports.add=(a,b)=>{
   return a*b;
}
*/