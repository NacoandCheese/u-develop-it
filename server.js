//export path to connection.js
const db = require('./db/connection');

//Express import
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');

//Path to inputCheck funtion
const inputCheck = require('./utils/inputCheck');

//Port designation
const PORT = process.env.PORT || 3001;
const app = express();


//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);

//Route that handles user requests that aren't supported by app
//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
