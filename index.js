const express = require('express');
const slugify = require('slugify');

const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("Home");
    res.end();
});

app.get('/submit',(req,res)=>{
    res.end("Submit get")
});

app.post('/submit',(req,res)=>{
    // console.log(slugify(req.stringfy()))
    res.end(`Name:${req.Name}`);
    // console.log(req)
})

app.listen(port);