var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Supervisor = require('./models/supervisor');
const Contact = require('./models/contact');
const Service = require('./models/service');

// Application API Routes
const supervisorRouter = require('./routes/supervisorRouter')(Supervisor);
const contactRouter = require('./routes/contactRouter')(Contact);
const serviceRouter = require('./routes/serviceRouter')(Service);

// Create link to Angular build directory
var distDir = __dirname + '/dist/';
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
const db = mongoose.connect(
  'mongodb://hector:pass1234.@ds141815.mlab.com:41815/heroku_bpg7x94l',
  function(err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    console.log('Database connection ready');

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
      var port = server.address().port;
      console.log('App now running on port', port);
    });
  }
);

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({ error: message });
}

app.use('/api', supervisorRouter);
app.use('/api', contactRouter);
app.use('/api', serviceRouter);

app.get('*', function(req, res) {
  res.sendfile('./dist/index.html');
});
