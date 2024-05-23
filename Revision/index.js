const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
})

let UsersArr = [];

app.get("/formdata", (req, res) => {
    let userData = req.query;    
    UsersArr.push(userData);
    UsersArr.forEach(element => {
        console.log(element.name) 
    });
    console.log(UsersArr)
    res.render('table', {data : UsersArr});
})

app.get("/delete", (req, res) => {
    
    res.render('table')
    // res.send('YourData')
})

app.listen(5000, () => {
    console.log("Your server is running in http://localhost:5000");
});