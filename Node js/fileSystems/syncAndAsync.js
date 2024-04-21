const fs=require("fs");

/*
//Ya Sync .. Blocking Statements
console.log("hello")
console.log(fs.readFileSync("./contact.txt","utf-8"));
console.log("hello2")
*/
//ya Async ... non blocking Statements

console.log("hello")
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(result)
    }
});
console.log("hello2")