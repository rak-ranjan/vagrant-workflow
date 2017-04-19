// Dependencies
var express = require('express');
var app = express();

// Configure port
var port = process.env.PORT || 4000;
var router = express.Router();

// GET http://localhost:4000/api?name=<YOUR NAME>
router.get('/', function(req, res) {
    name = req.query.name || 'stranger';
    res.json({ message: 'Hello, ' + name });
});

app.use('/api', router);

// Starting server
app.listen(port);
console.log('Listening on port ' + port);

// For testing
module.exports = app;
