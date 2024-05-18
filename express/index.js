import express from "express";
const app = express();

app.get('/', (request, response) => {
    response.send("Your First Home and index Route");
})

app.get('/home', (request, response) => {
    response.send("Your Second Route");
})

app.listen(3000);