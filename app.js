// set up ======================================================================
var express = require('express');
var app = express(); // create our app w/ express
var port = process.env.PORT || 8080; // set the port
var db = require('./app/config'); // load the database config
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./app/routes')(app);




app.set('port', process.env.PORT || 3000);

db.sequelize.sync().then(function() {



var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

});