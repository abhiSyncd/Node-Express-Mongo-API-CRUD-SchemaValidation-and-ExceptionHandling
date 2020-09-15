const express   = require('express');
const empRoutes = require('../routes/employeeRoutes');
const error     = require('../middleware/error');


module.exports = function(app) {
  app.use(express.json());
  app.use('/api/employee', empRoutes);
  app.use(error);
}


