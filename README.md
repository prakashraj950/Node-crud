# Features
- Fundamental of Express: routing, middleware, sending response and more
- Fundamental of Mongoose: Data models, data validation and middleware
- RESTful API including pagination,sorting and limiting fields
- CRUD operations with MongoDB
- Error handling
- Enviroment Varaibles
- handling error outside Express
- Catching Uncaught Exception

# Project Structure
- server.js : Responsible for connecting the MongoDB and starting the server.
- app.js : Configure everything that has to do with Express application. 
- config.env: for Enviroment Varaiables
- routes -> userRoutes.js: The goal of the route is to guide the request to the correct handler function which will be in one of the controllers
- controllers -> userController.js: Handle the application request, interact with models and send back the response to the client 
- models -> userModel.js: (Business logic) related to business rules, how the business works and business needs ( Creating new user in the database, checking if the user password is correct, validating user input data)
