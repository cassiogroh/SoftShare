const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");
module.exports = db;

// 1. Creating the DB table

// db.run(`
//     CREATE TABLE IF NOT EXISTS donators (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         image TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `)



// 2. Adding values to the table

// const query = `
//         INSERT INTO donators (
//             name,
//             image,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
// `



// function afterInsertData(err) {
//     if (err) {
//         return res.send("Registration error");
//     }

//     console.log('Registration succeful');
//     console.log(this);
// };

// db.run(query, values, afterInsertData);



// 4. Delete rows from the DB table

// db.run(`DELETE FROM donators`) // Deletes all the values at once

// db.run(`DELETE FROM donators WHERE id = ?`, [1], function(err) {
//     if(err) {
//         return console.log(err)
//     }

//     console.log("Register deleted succefuly")
//     })



    // 3 Consulting data from the table

// Consulting after step 4 to consider data added and deleted
    // db.all(`SELECT * FROM donators`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)
    // })

    // * could be  name, address, items, etc.