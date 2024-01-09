# Express.js Social Feed API Project

## Introduction
This project is designed as an introduction to Express and simulates the basic operations you would perform using a database, here represented with a local JSON file. It's a great stepping stone before diving into database management systems like MongoDB.

## Project Structure
- `index.js`: The main entry point for your Express application.
- `routes/`: Directory containing your route handlers.
- `controllers/controllers.js`: Contains functions for performing CRUD operations on your data.
- `data.json`: A local JSON file that acts as a mock database.

## Controllers
The `controllers.js` file exports several functions for interacting with the data in `data.json`. Each function returns a promise and is designed to replicate typical database operations:
- `getAll()`: Retrieves all posts.
- `getById(id)`: Retrieves a post by its ID.
- `updateById(id, update)`: Updates a post by its ID.
- `create(post)`: Creates a new post.
- `deleteById(id)`: Deletes a post by its ID.

## Route Handlers (Your Task)
In the `socials.js` module inside the `routes` folder, you will need to create Express route handlers to connect HTTP requests to the appropriate controller functions. Remember to use the `await` keyword when calling these functions, as they return promises.

## Data Format
The `data.json` file contains an array of post objects, each with the following structure:
```json
{
  "id": Number,
  "name": String,
  "post": String,
  "creationTime": String,
  "status": String
}
```

## Objective
Your task is to build RESTful endpoints in `socials.js` to handle CRUD operations. This exercise will help you understand how to structure your route handlers and work with asynchronous operations in Node.js, preparing you for more advanced tasks involving real databases like MongoDB.

## Instructions
1. Set up route handlers in `socials.js` for different CRUD operations.
2. Ensure each handler correctly processes requests and sends appropriate responses.
3. Test your endpoints using Postman to simulate client requests.
