const express = require('express')
const app = express();
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
const port = 9000;



app.get('/', (req, res) => {
    // const searchTerm = req.params.searchTerm;
    res.send("Sent from the back-end")
// perform search using the searchTerm
// and return the results as JSON
});



app.listen(port, () => { 
    console.log(`Supremium Selections on port ${port}`)
});