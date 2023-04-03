const express = require('express')
const app = express();
const port = 9000;

app.use(express.static('public'));

app.get('', (req, res) => {
    const searchTerm = req.params.searchTerm;
// perform search using the searchTerm
// and return the results as JSON
});

app.listen(port, () => { 
    console.log(`Supremium Selections on port ${port}`)
});