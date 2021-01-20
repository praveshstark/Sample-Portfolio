const path=require('path');
const express=require('express');
const app=express();
const port=4000;

//console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const staticPath=path.join(__dirname, "../public");

//builtin middleware
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.send('Hello Guys for the Express Server ');
});

app.listen(port, ()=>{
    console.log(`listen to the port ${port}`);
});