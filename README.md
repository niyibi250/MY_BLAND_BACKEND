# Potofolia Backend

Welcome to the backend documentation for the Potofolia project! This backend side manages the server-side logic, database interactions, and API endpoints for the Potofolia application.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [API Endpoints](#api-endpoints)
7. [Database Schema](#database-schema)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

Potofolia is a project aimed at providing a platform for me to showcase my Ablity online. This backend component serves as the backbone of the application, handling user authentication, Blog management, and contact message handling.

## Features

- User authentication (registration, login)
- Contact message handling (receive and manage messages from users)
- Secure password storage using hashing algorithms
- RESTful API for frontend integration
- Error handling
- Jest testing

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Winston for logging
- Joi for request validation
- jest for testing

## Installation

To run the Potofolia backend locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.

## Configuration

Before running the server, make sure to set up the necessary environment variables:

- `MONGODB_URI`: MongoDB connection URI.
- `JWT_SECRET`: Secret key for generating JWT tokens.
- `PORT`: Port number for the server (optional, default is 3000).

You can set these variables in a `.env` file in the project root directory.

## API Endpoints

### Authentication

- `POST /api/v1/login/Registration`: Register a new user.
- `POST /api/v1/login/login`: Log in an existing user.

### Blog Handling

- `GET /api/v1/admin/blog`: Retrieve all blog.
- `GET /api/v1/admin/blog/:id`: Retrieve a specific blog by ID.
- `POST /api/v1/admin/blog`: Create a new blog.
- `PATCH /api/v1/admin/blog/:id`: Update an existing blog.
- `DELETE /api/v1/admin/blog/:id`: Delete a blog.

### Contact Message Handling

- `GET /api/v1/admin/contact`: Retrieve all contact messages.
- `GET /api/v1/admin/contact/:id`: Retrieve a specific contact message by ID.
- `DELETE /api/v1/admin/contact/:id`: Delete a contact message.

### user Handling

- `GET /api/v1/admin/user`: Retrieve all user messages.
- `GET /api/v1/admin/user/:id`: Retrieve a specific user message by ID.
- `PATCH /api/v1/admin/user/:id`: Update a user message.
- `DELETE /api/v1/admin/user/:id`: Delete a user message.

## Database Schema

The backend uses MongoDB as the database, with the following schema:

- User: { _id, username, email, password }
- Blog: { _id, title, description, imageURL }
- userMessage: { _id, name, email, message }

## Contributing

Contributions to the Potofolia project are welcome! If you would like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the ERIC NIYIBIZI License - see the [LICENSE](LICENSE) file for details.
