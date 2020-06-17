const express = require('express');
const App = express();

App.use(express.static("public"))

App.set('view engine', 'html')

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: App,
    noCache: true
})

App.get("/", (req, res) => {
    return res.render('index');
})

App.get("/Register", (req, res) => {
    return res.render('register');
})

App.get("/Search", (req, res) => {
    return res.render('search_results');
})

// Ligar o servidor
App.listen(5000) // Porta 5000
