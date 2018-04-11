var express = require('express');
//var db = require('./models/db');
const bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true }));

//require('./controllers/routes.js')(app);


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
