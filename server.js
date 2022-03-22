//Express import
const express = require('express');
//Mysql2 import
const mysql = require('mysql2');

//Port designation
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySql username,
        user: 'root',
        // Your MySQL passowrd,
        password: 'password',
        database: 'election'
    },
    console.log('Connected to the election database')
    
);

//Query for read operation
//Get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err,row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

//Query for Delete Operation
//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//Query for Create Operation
//Create candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
             VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});


// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })




// //Test express connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });



//Route that handles user requests that aren't supported by app
//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});







//Starts express server on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});