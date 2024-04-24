const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    // console.log(req.headers);
    const log=`${Date.now()} , ${req.url}: New Request Receive \n`
    fs.appendFile("./requestInfo.txt",log,(err,data)=>{
        // res.end("Hello user I am here");
        switch (req.url) {
            case '/': res.end("Home Page")
                break;
            case '/about': fs.readFile("./serverCreate.txt", "utf-8", (err, data) => {
                    if (err) {
                        console.error("Error reading file:", err);
                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.end('Internal Server Error');
                    } else {
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end(data);
                    }
                });
                break;
            default: res.end("404 PAGE NOT FOUND")
                break;
        }
    })

});

myServer.listen(8000,()=>{
    console.log("Server Started")
})