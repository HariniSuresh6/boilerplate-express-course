let express = require('express');
let app = express();
console.log("Hello world");

// Get Method
app.get('/',function(req,res){
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});



module.exports = app;



































 module.exports = app;
