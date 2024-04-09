// console.log("Hello Niketan");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

// http://localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("<h1>App twitter may ho</h1>")
})

// http://localhost:3000/fb
app.get('/fb',(req,res)=>{
    res.send('You are in FaceBook')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})