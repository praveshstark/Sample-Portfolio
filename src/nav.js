const express=require('express');
const app=express();

//for create app

app.get('/',(req,res)=>{
    res.send('welcome to home');
})
app.get('/about',(req,res)=>{
    res.send('welcome to about');
})
app.get('/contact',(req,res)=>{
    res.send('thanjs for contacting me');
})
app.get('/temp',(req,res)=>{
    res.send('temp is very low');
})

app.listen(8000,()=>{
    console.log('connected');
});