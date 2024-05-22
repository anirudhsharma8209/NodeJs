const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/formdata", (req, res) => {
    let userData = req.query;
    res.render('table', userData);
})

app.listen(5000, () => {
    console.log("Your server is running in http://localhost:5000");
});