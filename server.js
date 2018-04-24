const express= require('express');

const app= new express();


app.use(express.static(__dirname + '/public'));

app.get('/',(req, resp)=>{
    //resp.send('<h1>Hello express</h1>');
    resp.send({
        name:'Abel Masila',
        age: 25,
        likes:[
            'biking','swimmin'
        ]
    })
});

app.get('/about',(req,resp)=>{
    resp.send('About Page');
});
app.get('/bad',(req,resp)=>{
    resp.send({
        errorMessage:'Something went bad!'
    });
});

app.listen(3000,()=>{
    console.log("Server is up on port 3000!")
});