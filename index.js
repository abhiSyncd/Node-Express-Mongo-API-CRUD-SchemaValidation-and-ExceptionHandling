const express = require('express');
const app     = express();
const path    = require('path');

require('./app/config/db')();
require('./app/config/routes')(app);

//const error = require('./app/middleware/error');
//app.use(error);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


app.use(function(req, res) {
    return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});


process.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown such as  : Port Already in use');
  // process.exit(1);  // Stop further processing of application
});


process.on('unhandledRejection', (err , req) => {
  console.error(err, 'Unhandled Rejection Promise either during Project-Build or within routes');
  //process.exit(1); // Stop further processing of application 
});


app.listen(3000, () => console.log('Listening on Port 3000'));