# Week-3 Project: Product Inventory RESTful API

This repository contains the backend implementation for the **Week-3** project. It provides a robust, modular RESTful API built with **Node.js**, **Express**, and **MongoDB/Mongoose** for managing a product inventory system.

---

##  Project Structure & Architecture

The application follows a clean, modular architecture separating API routing, data modeling, and server initialization to ensure high maintainability and scalability.

```text
├── package.json            # Root dependencies (express, mongoose, bcrypt, jwt, etc.)
├── README.md               # Project documentation
└── backend/
    ├── API/
    │   └── productApi.js   # Express router handling CRUD endpoints
    ├── models/
    │   └── productModel.js # Mongoose schema with built-in data validation rules
    ├── package.json        # Backend metadata and module settings
    ├── req.http            # VS Code REST Client test requests
    └── server.js           # Main application entry point and database connection setup
```

---

##  Core Components

### 1. Entry Point (`backend/server.js`)
- Initializes the Express server and configures global middleware (JSON body parser, Cookie parser).
- Connects to the local MongoDB database (`mongodb://localhost:27017/anuragdb`).
- Mounts the Product API router under the `/product-api` path prefix.
- Starts the server on port `4000`.

### 2. Data Layer (`backend/models/productModel.js`)
Defines the Mongoose schema for the `product` collection with strict validation rules:
- **`productId`**: Number (Required)
- **`productName`**: String (Required)
- **`price`**: Number (Required, enforced minimum of `10,000` and maximum of `50,000`)
- **`brand`**: String (Required)

> *Note:* The Mongoose model is exported under the variable name `ProductModel` to manage the `product` collection in MongoDB.

### 3. Routing Layer (`backend/API/productApi.js`)
Express Router module that implements complete asynchronous CRUD operations against MongoDB:
- Handles product creation, retrieval of all products, finding a specific product by ID, modifying existing records, and deleting items.

---

##  Key Features

- **RESTful Endpoints**: Full CRUD implementation conforming to REST architectural standards.
- **Data Integrity & Validation**: Built-in Mongoose schema validation prevents invalid product entries (e.g., price range constraints).
- **ES Modules**: Utilizes modern JavaScript ES Module syntax (`import`/`export`).
- **Developer Testing**: Includes a ready-to-use `req.http` file for seamless endpoint testing directly inside VS Code.

---

##  Setup & Execution Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) running locally on default port `27017`

### Getting Started

1. **Clone or navigate to the project directory:**
   ```bash
   cd c:/JAVASCRIPT/WEEK-3/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   node server.js
   ```
   *You should see the following logs indicating successful initialization:*
   ```text
   db connection success
   server on port 4000....
   ```

---

##  API Endpoints Summary

Base URL: `http://localhost:4000/product-api`

| HTTP Method | Endpoint | Description | Success Status | Payload / Body |
| :--- | :--- | :--- | :--- | :--- |
| **POST** | `/product` | Create a new product | `201 Created` | JSON Product Object |
| **GET** | `/product` | Retrieve all products | `200 OK` | Array of Products |
| **GET** | `/product/:productId` | Retrieve a specific product by ID | `200 OK` | Single Product Object |
| **PUT** | `/product/:productId` | Update a specific product | `200 OK` | Modified Product Fields |
| **DELETE** | `/product/:productId` | Delete a specific product | `200 OK` | Deleted Product Object |

---

##  Testing with VS Code REST Client

You can test all endpoints without external tools like Postman:
1. Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in VS Code.
2. Open `backend/req.http`.
3. Click the **`Send Request`** button appearing above any HTTP request block to view responses directly in the editor.
