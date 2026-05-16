# Week-3 Project

This repository contains the backend implementation for the Week-3 project. It provides a RESTful API built with Node.js and Express for managing a product inventory.

## Project Structure & Architecture

The backend follows a modular architecture designed for scalability, separating the entry point, API routing, and database models.

```text
WEEK-3/
└── backend/
    ├── API/
    │   └── productApi.js   # Express router handling MongoDB CRUD operations
    ├── models/
    │   └── productModel.js # Mongoose schema and data validation rules
    ├── .env                # Environment variables (PORT, DB_URL)
    ├── package.json        # Project metadata and dependencies
    ├── req.http            # HTTP requests for testing the API in VS Code
    └── server.js           # Main application entry point & fallback in-memory API
```

### Backend Components

1. **`server.js` (Entry Point):**
   - Configures global middleware (`cors`, `express.json`, `cookie-parser`).
   - Establishes the connection to the MongoDB database using Mongoose.
   - Provides a centralized error handling mechanism (404 and 500 error catchers).
   - Currently includes an **in-memory fallback** implementation of the Product API with custom validation logic.

2. **`models/productModel.js` (Data Layer):**
   - Defines the structure of the `product` collection in MongoDB.
   - Enforces strict data validation:
     - `productId`: Number (Required)
     - `productName`: String (Required)
     - `price`: Number (Required, Minimum: 10000, Maximum: 50000)
     - `brand`: String (Required)

3. **`API/productApi.js` (Routing Layer):**
   - An Express Router module that implements the full CRUD operations using the Mongoose `UserModel`.
   - Handles async database operations (`save`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`).

## Features

- **RESTful Architecture**: Complete CRUD (Create, Read, Update, Delete) endpoints.
- **Dual Implementation**: Contains both a MongoDB/Mongoose-backed router (`productApi.js`) and an in-memory fallback (`server.js`).
- **Data Validation**: Both Mongoose schemas and custom in-memory validators ensure data integrity (e.g., price constraints).
- **Global Error Handling**: Centralized error handling middleware intercepts unexpected server errors and route not found scenarios.
- **Middleware Integration**: Secure and ready for frontend integration with `cors`, `cookie-parser`, and JSON body parsing.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)

## Setup Instructions

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Ensure you have a `.env` file in the `backend/` directory with the following variables:
   ```env
   PORT=4000
   DB_URL=your_mongodb_connection_string
   ```

4. **Start the Server:**
   ```bash
   node server.js
   ```
   *The server will start on `http://localhost:4000` (or the port specified in your `.env` file).*

## API Endpoints

The API is accessible under the `/product-api/` prefix.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/product` | Create a new product. |
| **GET** | `/product` | Retrieve all products. |
| **GET** | `/product/:productId` | Retrieve a specific product by its ID. |
| **PUT** | `/product/:productId` | Update an existing product. |
| **DELETE** | `/product/:productId` | Delete a product. |

## Testing the API

You can use the provided `req.http` file with the VS Code [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension to easily test the API endpoints without needing a separate tool like Postman.
