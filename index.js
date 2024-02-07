require('dotenv').config();
const express = require("express");
const app = express();



app.listen(process.env.PORT, () => {
    console.log("App listening successfully");
})

app.get('/', (req, res) => {
    res.send('<h1>This is Home Page</h1>')
})

app.get('/dashboard', (req, res) => {
    res.send("<h1>Dashboard</h1>")
})