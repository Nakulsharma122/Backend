const express = require ("express");
const app =express();// express as a function  and return the object .

let port =  8080;
app.listen(port, ()=>{
    console.log(`Hello Amit  ${port}` );
})


app.use((req, res)=>{
   console.log(req);
  res.send("Hello Nakul Sharma");
   res.send({
    name: "apple",
    color:"orange color",
   });
 
});


//         Routing response 




// app.get("/", (req,res)=>{
//     res.send("Hello Nakul Sharma");
// });  


// app.get("/fruits",(req, res)=>{
//     res.send("you contacted the fruit path  ");
// });

    //  to get all the response  to unknown or not assigned path. 
// app.get("*",(req, res)=>{
//     res.send("you contacted the unknown  path  ");
// });


// app.post("/", (req,res)=>{
//      res.send("you send a post request");
// });


// request params
app.get("/:username/:id",(req,res) =>{
    console.log(req.params);
});

//     Search query 
               // search query: /search?q=

app.get("/search",(req ,res)=>{
    //let {q} = req.query;
    if (!req.query){
       res.send("nothing searched"); 
    }
    res.send("no result");
});









