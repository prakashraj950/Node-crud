## Overview
This project is a Node.js application using Express.js for the back-end API. It connects to a MongoDB database for data storage and includes error handling and validation features. The project is designed to be robust and scalable, with a focus on handling various types of errors gracefully.

## Features
- RESTful API: Provides endpoints for CRUD operations.
- MongoDB Integration: Connects to a MongoDB database for data storage.
- Error Handling: Includes custom error handling for various types of errors.
- Validation: Includes validation for input data using Mongoose.

## Project Structure
```

node-express-project/
│
├── controllers/               # Controllers for handling requests
│   ├── userController.js      # User-related operations
│   └── errorController.js     # Error handling
│
├── models/                    # Mongoose schemas and models
│   └── userModel.js           # User schema
│
├── routes/                    # API route definitions
│   └── userRoutes.js          # User routes
│
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── app.js                     # Express app setup
├── server.js                  # Server configuration and start
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation


```

## Getting Started
### Prerequisites
- Node.js & npm installed
- MongoDB installed and running

## Installation

1. Clone the repository:

```
git clone https://github.com/prakashraj950/Node-crud.git
cd Node-crud
```

2. Install dependencies
```
npm install 
```
3. Create a `config.env` file in the root directory and configure your environment variables:

```
DATABASE=mongodb://<username>:<password>@<cluster-url>/<db-name>
DATABASE_PASSWORD=<your-database-password>
PORT=5000
```

## Running the Project
1. Start the Express server:
```
npm start
```
2. Open your browser or API client and navigate to http://localhost:5000.


## Available Scripts
- ```npm run server```: Starts the Express server.
- ```npm start```: Runs the server with nodemon for development (auto-reloads on file changes).


## API Endpoints
### Users
- GET /api/users: Fetch all users
- POST /api/users: Add a new user
- PUT /api/users/:id: Update a user
- DELETE /api/users/:id: Delete a user


## Error Handling
### The project includes custom error handling for:

- CastError: Invalid data type or format
- ValidationError: Invalid input data
- DuplicateKeyError: Duplicate field value

## Troubleshooting
- Ensure `MongoDB` is running and accessible with the correct credentials.
- Check the `config.env` file for correct configuration.
