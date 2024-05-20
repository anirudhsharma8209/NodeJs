// import express from 'express';
const express = require("express");
const app = express();


// middleware 
app.set('view engine','ejs')

app.get('/', (req, res) => {
    // res.send("<h1>Anirudh</h1>Your home route or first route");

    // let name = "Anirudh Sharma"
    res.render('index');
});

app.listen(5000);