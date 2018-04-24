const express= require('express');
const hbs=require('hbs');
const fs= require('fs');

const port=process.env.PORT || 3000;

const app= new express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


//register new middleware ie logger middleware
app.use((req, res,next)=>{
    const now = new Date().toString();
    const log=`${now} ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log',log + '\n', (err)=>{
        if(err){
            console.log('Unable to append to server.log');
        }
    });
    next();
});
//maintenance middleware
// app.use((req,res,next)=>{
//     res.render('maintenance');
// });

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
app.listen(port,()=>{
    console.log(`Server is up on port ${port}!`)
});