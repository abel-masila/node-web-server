const express= require('express');
const hbs=require('hbs');

const app= new express();


app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req, resp)=>{
    resp.render('home',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website'
    })
});

app.get('/about',(req,resp)=>{
    resp.render('about',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/bad',(req,resp)=>{
    resp.send({
        errorMessage:'Something went bad!'
    });
});

app.listen(3000,()=>{
    console.log("Server is up on port 3000!")
});