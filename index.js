// include express and setup it
const express = require('express');
const app = express();

const port = 80;

// include body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set a static folder
app.use(express.static('html'));

// serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html');
});

// start the server
app.listen(port, function() {
    console.log('Server started on port ' + port + '...');
});