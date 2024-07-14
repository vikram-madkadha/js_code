const fs = require("fs");
fs.writeFile("message.text","I am here to represent something of great value!!",(err)=>{
    if(err) throw err;
    console.log("The file has been saved!");
});
fs.readFile("message.text","utf8",(err,data)=>{
    if(err) throw(err);

    console.log(data);
});