const express= require('express');
const hbs=require('hbs');

const app= new express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});
app.get('/',(req, resp)=>{
    resp.render('home',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    })
});

app.get('/about',(req,resp)=>{
    resp.render('about',{
        pageTitle: 'About Page'
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