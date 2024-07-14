import express from "express";
const app = express();
const port=3000;

app.get("/",(req,res)=>{
res.send("<h1>Hey there</h1>"+"Hello welcome to my channel!!");
});

app.get("/about",(req,res)=>{
  res.send("This has been really a fun going with each tutorial. The learning should never be stopped");
});
  app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
  })
