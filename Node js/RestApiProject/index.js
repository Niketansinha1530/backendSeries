const express=require('express');
const fs=require('fs');
const app=express();


const users= require('./MOCK_DATA.json');

//All Routes
app.get("/",(req,res)=>{
    res.send("<h1>Welcome here you get your user Data</h1>")
})
//html render on browser
app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        `
    res.send(html);
})
//REST API
app.get("/api/users",(req,res)=>{
    res.json(users);
})

/* //same route so we can write like this.
app.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user =users.find((user)=> user.id==id);
    res.json(user);
}).patch((req,res)=>{
    //Todo: edit the user with id
    res.json({status:"pending"})
}).delete((req,res)=>{
    //Todo: delete the user with id
    res.json({status:"pending"})
})
*/

app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user =users.find((user)=> user.id==id);
    res.json(user);
})

//middleware convert karega body ko json formate may
app.use(express.urlencoded({extended:false}))
app.post("/api/user",(req,res)=>{
    //Todo: create new user
    const body=req.body;
    users.push({...body,id:users.length+1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length});
    })
})

app.patch("/api/user/:id", (req, res) => {
    // Todo: edit the user with id
    const id = Number(req.params.id);
    const newData = req.body; // Assuming the new data is provided in the request body

    // Find the index of the user with the given ID
    const userIndex = users.findIndex((user) => user.id === id);

    // If user not found
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    // Get the existing user object
    const existingUser = users[userIndex];

    // Update the existing user object with the new data
    Object.assign(existingUser, newData);

    // Write the updated user data back to the file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        res.json({ status: "success", updatedUser: existingUser });
    });
});

app.delete("/api/user/:id",(req,res)=>{
    //Todo: delete the user with id
    const id=Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id == id);
    // console.log(userIndex);
    // If user not found
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    // Remove the user from the array
    users.splice(userIndex, 1);
    // Write the updated user data back to the file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        res.json({ status: "success",IndexDeleted:userIndex });
    });
})

const PORT=8000;

app.listen(PORT,()=>console.log("Server started"))