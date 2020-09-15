const mongoose = require('mongoose');
const Joi = require('joi');

const EmployeeModel = mongoose.model('Employee', new mongoose.Schema({
    name      : String,
    email     : String,
    state     : String,
    city      : String,
    salary    : Number,   
    hiredDate : Date , 
    createdDate : {
        type    : Date, 
        default : Date.now,
    }
  }));
  

  function validateEmployeeModel(employee) {
    const schema = {
      name        : Joi.string().min(5).max(50).required(), 
      email       : Joi.string().email(),
      state       : Joi.string(),
      city        : Joi.string(), 
      salary      : Joi.number(),
      hiredDate   : Joi.date(),
      createdDate : Joi.date(),
    };
  
    return Joi.validate(employee, schema, { abortEarly: false });
  }

  
  
  exports.Employee         = EmployeeModel;
  exports.validateEmployee = validateEmployeeModel;




  //https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527