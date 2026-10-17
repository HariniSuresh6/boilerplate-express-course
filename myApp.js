let express = require('express');
let app = express();
console.log("Hello world");

// code to serve static asset
app.use('/public', express.static(__dirname + '/public'));

// Get Method
app.get('/',function(req,res){
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});



module.exports = app;



































 module.exports = app;
