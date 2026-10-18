let express = require('express');
let app = express();
require('dotenv').config();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

console.log("Hello world");

// code to serve static asset
app.use('/public', express.static(__dirname + '/public'));

//Implement a Root-Level Request Logger Middleware
app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});


// Get Method to serve a String
/* app.get('/',function(req,res){
    res.send("Hello Express");
});*/

// Get Method to serve a file
app.get('/',function(req,res){
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

// Get Method
/*app.get('/json',function(req,res){
    res.json({"message": "Hello json"});
});*/

//Use .env file
app.get('/json',function(req,res){
    let response = {"message": "Hello json"};
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        response.message = response.message.toUpperCase();
    }
    res.json(response);
});

// Chain Middleware to Create a Time Server
app.get('/now',
    function(req, res, next) {
        req.time = new Date().toString();
        next();
    },
    function(req, res) {
        res.json({ time: req.time });
    }
);

//Get Route Parameter Input from the Client
app.get('/:word/echo',function(req,res){
    let word = req.params.word;
    res.json({echo: word});
})

//Get Query Parameter Input from the Client
app.get('/name', function(req, res) {
    let first = req.query.first;
    let last = req.query.last;

    res.json({ name: first + ' ' + last });
});

app.post('/name',function(req,res){
    res.json({
        name: req.body.first + ' ' + req.body.last
    });
});


module.exports = app;



































 module.exports = app;
