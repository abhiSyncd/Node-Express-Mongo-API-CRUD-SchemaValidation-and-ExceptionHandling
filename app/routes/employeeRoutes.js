const {Employee , validateEmployee} = require('../models/employeeModel'); 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const asyncMiddleware = require('../middleware/async'); 

module.exports = router; 


//***************************************** 1 - HTTP POST : Inserting Documents ************************************************************

/**
 * 
 * 1 - I  - Single Insert
 * 
 */
router.post('/insertSingleEmployee' , asyncMiddleware(async function (req, res) {
  
  //1-Validations
  const { error } = validateEmployee(req.body); 
  if (error) {
    console.log(error.details);
    return res.status(400).send(error.details);
  }

  
  //2-Peform insert operaton
  let emp = new Employee(req.body)
  await emp.save();

  //3-Send response to client
  res.status(200).send(emp);
     
}))



/**
 * 
 * 1 - II - Multiple Inserts
 * 
 */
router.post('/insertMultipleEmployee', async function (req, res) {

  //1-Validations
  let errDetails = [];
  req.body.forEach(function(obj){
    const { error } = validateEmployee(obj); 
    if (error) {
     errDetails.push(error.details)
   }
   });
 
  if (typeof errDetails !== 'undefined' && errDetails.length > 0) {
    return res.status(400).send(errDetails);
  }
 

  //2-Perform insert operation
  var responseFromDB = await Employee.create(req.body);

  //3-Send response to client
  res.status(200).send(responseFromDB);

});



//***************************************** 2 - HTTP GET : Selecting  Documents ************************************************************


/**
 * 
 * 2 - I - Single Row Select : Select * from employees where _id = <passedEmployeeId>
 * 
 */

router.get('/getAllEmployees', asyncMiddleware(async (req, res) => {
  const emps = await Employee.find().sort('name')
  res.send(emps);
}));


/**
 * 
 * 2 - II - Multiple Rows Select :  Select * from employees order by name
 * 
 */
router.get('/getSingleEmployee/:id',  asyncMiddleware(async (req, res) => {

var employeeIdToGet = mongoose.Types.ObjectId(req.params.id);

const emp = await Employee.findOne(employeeIdToGet); 

if (!emp) return res.status(200).send('The customer with the given ID was not found.');

res.send(emp);
}));



