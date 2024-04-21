const fs=require("fs");

/*

//this write operations overwrite the content
//sync...
fs.writeFileSync("./test.txt","Hello world3")
console.log("write successfully");
*/

//async
//fs.writeFile("./test.txt","kya hal chal3",(err)=>{})

//Read file

//sync
// const info=fs.readFileSync("./contact.txt","utf-8");
// console.log(info)

//async

/*
// this async readfile not return anythings
fs.readFile("./contact.txt","utf8",(err,result)=>{
    if(err){
        console.log("Error ",err);
    }else{
        console.log(result)
    }
})*/


//append with before text content
// fs.appendFileSync("./test.txt","may dousri line may aunga");


//this also do overwrite
//fs.copyFileSync("./contact.txt","./newContact.txt")

//delete file
// fs.unlinkSync("./newContact.txt")

//check status of file

// const result=fs.statSync("./test.txt");
// console.log(result);

//create directory

// fs.mkdirSync("./demo");

// fs.copyFileSync("./contact.txt","./copy.txt");
// fs.renameSync("./copy.txt","./updatedFile.txt");

console.log(fs.statSync("./updatedFile.txt"));

