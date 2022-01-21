const express = require('express');
const app = express();



app.use(express.static('public'));

const homeRouter = require('./routers/main.js');




app.use('/', homeRouter);

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });