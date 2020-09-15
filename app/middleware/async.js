
//Applying Try-catch blocks to all Route's mongodb-call
module.exports = function asyncMiddleware(handler){
    return async(req,res,next) =>{
      try{
        await handler(req,res)
      }
      catch(ex){
        next(ex); //Catched exception in any routes is passed to error.js
      }
    };
}



/**
GIVEN : 
    router.get('/getAllEmployees', async (req,res) => {

      await Employee.find( function(err, responseFromDB) {
        if (err) {
          console.log('an error occurred', err);
          res.status(500).send("Something Failed");
        }

        res.status(200).send(responseFromDB);

      }).sort('name');

    });


------------------------------ WAY 1 : Using Try catch : uses next--------------------------------------

router.get('/getAllEmployees1', async (req, res , next) => {

   try{
    const emps = await Employee.find().sort('name')
    res.send(emps);
   }
   catch(ex){
    next(ex); //Errors will be passed to Express's error.js
   }
});


------------------------------ WAY 2 : Using Express Middleware- -------------------------------------

// Any error in this route will be passed to Express error.js : Removes Try catch from every Routes 

const asyncMiddleware = require('../middleware/async'); 

router.get('/getAllEmployees2', asyncMiddleware(async (req, res , next) => {
    const emps = await Employee.find().sort('name')
    res.send(emps);
}));



------------------------------  way 3 : Using NPM Module express-async-errors -------------------------------------

//way 3 : Using NPM Module express-async-errors : npm i express-async-errors : Removes need to write asyncMiddleware() in every route
router.get('/getAllEmployees3', async (req, res , next) => {
  const emps = await Employee.find().sort('name')
  res.send(emps);
});


 */
  