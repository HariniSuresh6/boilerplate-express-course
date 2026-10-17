let express = require('express');
let app = express();
console.log("Hello world");

// Get Method
app.get('/',function(req,res){
    res.send('Hello Express');
});

module.exports = app;



































 module.exports = app;
