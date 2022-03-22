//Express import
const express = require('express');

//Port designation
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());


//Test express connection
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//Route that handles user requests that aren't supported by app
//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});







//Starts express server on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});