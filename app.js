var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(res,req){
    req.send('Hi');
});

app.get('/ejs',function(res,req){
    req.render('default',{name:['Mike','Jack','Lucy']});
});

app.listen(3000);