var express=require("express");
var app=express();


app.get("/",(req,resp)=>{
    resp.setHeader("content-type","text/html");
    resp.send("<h3>Hello Express</h3>");
});

app.get("/books/:code",(req,resp)=>{
    resp.setHeader('content-type','application/json');
    var infos={name:'Express',email:'med@kaffouh.net',code:req.params.code};
    resp.send(JSON.stringify(infos));
});

app.listen(8889,()=>{
    console.log("Server Started...");
});