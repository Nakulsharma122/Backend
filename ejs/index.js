const express = require ("express");
const app = express ();
const port = 8080;
const path = require ("path");
                   // Serving   Static files  
 app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));   // start the server from any external directory 

app.get("/",(req,res)=>{
    res.render("home.ejs");
});


// // Instgram ejs 
// app.get("/ig/:username",(req,res)=>{
//     const followers = ["Ram", "sita","Bharat","laxman"];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username,followers});
// });

// Instagram page with ejs 
app.get ("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data){
    res.render ("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});

// If conditional 

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
});

app.listen (port, ()=>{
    console.log(`listening on port ${port}`);
}); 