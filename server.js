const express= require('express');

const app= new express();

app.get('/',(req, resp)=>{
    resp.send('Hello express');
});

app.listen(3000);