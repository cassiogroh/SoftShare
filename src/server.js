const express = require('express');
const App = express();

const db = require("./database/db")


App.use(express.static("public"))
App.use(express.urlencoded({ extended: true }))


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

App.post("/savepoint", (req, res) => {
    // Inserting data in the DB
    const query = `
        INSERT INTO donators (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
        `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function afterInsertData(err) {

        if (err) {
            return res.send("Error in registration");
        }

        console.log('Registered succefully');
        // console.log(this);

        return res.render("register", { saved: true })
    }
    db.run(query, values, afterInsertData);
})

// App.get("/search", (req, res) => {
//     return res.render('search_results');
// })

App.get("/search", (req, res) => {
    const search = req.query.search;

    db.all(`SELECT * FROM donators WHERE state LIKE '%${search}%'`, function (err, rows) {

        if (search == "") {
            // Pesquisa vazia
            return res.render("search_results", { donatores: rows, total: 0 })
        }

        if (err) {
            console.log(err)
        }

        const total = rows.length;

        // Mostrar à página HTML os dados do banco de dados
        return res.render("search_results", { donators: rows, total: total })
    })
})

// Ligar o servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});