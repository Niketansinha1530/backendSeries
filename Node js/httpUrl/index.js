const http=require("http");
const fs=require("fs");
const url=require("url");

const myServer=http.createServer((req,res)=>{
    
if(req.url=="/favicon.ico") return res.end();
const log=`${Date.now()},${req.method},${req.url}: New User requested \n`;
const myUrl=url.parse(req.url,true);
console.log(myUrl)

fs.appendFile("./info.txt",log,(err,data)=>{
    switch (myUrl.pathname) {
        case "/": res.end("Home Page")
            break;
        case "/about": 
        // http://localhost:8000/about?name=kanha 
            const userName=myUrl.query.name;
            res.end(`Hi ${userName}`);
            break;
        case"/search": 
        // http://localhost:8000/search?search_query=javaScript+tic+tac+toe
        const search=myUrl.query.search_query;
        res.end(`Here are you results for ${search} `);
            break;

        case "/signup":
            if(req.method=='GET')res.end("this is Form");
            else if(req.method=='POST'){
                //db query
                res.end("Succesfully store form")
            }
            break;    
        default: res.end("404 Not Found Page")
            break;
    }
})
})

myServer.listen(8000,()=>{
    console.log("Server is started At Port Number",8000);
})