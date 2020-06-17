const express = require('express');
const App = express();

App.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: App,
    noCache: true
})

App.get("/", (req, res) => {
    return res.render('index.html');
})

App.get("/Register", (req, res) => {
    return res.render('register.html');
})

App.get("/Search", (req, res) => {
    return res.render('search_results.html');
})

// Ligar o servidor
App.listen(5000) // Porta 5000