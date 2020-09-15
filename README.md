# Node-Express-Mongo-API-CRUD-SchemaValidation-and-ExceptionHandling

## 1- To get the Node server running locally:   

  > - Install MongoDB Community Edition (instructions) and run it by executing 'mongod' command  
  > - Clone this repo  
  > - npm install   :  command to install all required dependencies  
  > - node index.js : command to run the project on port 3000  


## 2 - Dependencies:   

  > - expressjs - The server for handling and routing HTTP requests
  > - mongoose  - For modeling and mapping MongoDB data to javascript
  > - joi       - For schema validation
  


## 3 - Application Structure:   

  > index.js  
      - The entry point to our application. This file defines our express server which requires mongoDB and routes config  
      - handles 404 Exception and uncaughtException and unhandledRejection errors
     
  > config/   
    - db.js     - configuration requires to connect to mongoDB  
    - routes.js - define all routes of the application
  
  > models/    
    - employeeModel.js - contains the schema definitions for our Mongoose models
    - JOI validations 

  >routes/  
    - employeeRoutes.js - contains the route definitions for our API.
 
  >middleware/  
    - error.js - Handling 400,500 Exceptions in all routes   
    - async.js - removes need of writing try-catch block in all the routes in employeeRoutes.js 
