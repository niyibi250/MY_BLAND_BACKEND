# Blog API

Welcome to the Blog API! This API allows you to manage blog posts and comments. It provides endpoints for creating, reading, updating, and deleting both blog posts and comments.

## Table of Contents

- [Features](#features)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete blog posts
- Create, read, update, and delete comments on blog posts
- Authentication to protect sensitive endpoints
- RESTful API design
- JSON formatted responses
- Error handling for invalid requests

## Endpoints

- `POST /api/posts`: Create a new blog post
- `GET /api/posts`: Get a list of all blog posts
- `GET /api/posts/:id`: Get details of a specific blog post
- `PUT /api/posts/:id`: Update a specific blog post
- `DELETE /api/posts/:id`: Delete a specific blog post
- `POST /api/posts/:postId/comments`: Create a new comment on a blog post
- `GET /api/posts/:postId/comments`: Get all comments on a specific blog post
- `GET /api/posts/:postId/comments/:commentId`: Get details of a specific comment on a blog post
- `PUT /api/posts/:postId/comments/:commentId`: Update a specific comment on a blog post
- `DELETE /api/posts/:postId/comments/:commentId`: Delete a specific comment on a blog post

## Authentication

Authentication is required for some endpoints to protect sensitive operations like creating, updating, and deleting blog posts and comments. The API uses JSON Web Tokens (JWT) for authentication. To authenticate, include the JWT token in the Authorization header of your requests.

## Getting Started

To get started with the Blog API, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Set up environment variables (e.g., database connection string, JWT secret).
4. Start the server by running `npm start`.

## Usage

Once the server is up and running, you can start sending HTTP requests to the provided endpoints using your favorite API testing tool (e.g., Postman, Insomnia). Make sure to include the required authentication token for protected endpoints.

Here's an example of creating a new blog post using cURL:

```bash
curl -X POST \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{"title": "New Blog Post", "content": "Lorem ipsum dolor sit amet."}' \
  http://localhost:3000/api/posts



[![continous integration on mY BLAND](https://github.com/niyibi250/MY_BLAND_BACKEND/actions/workflows/cont_int_testing.yml/badge.svg?branch=FT%28backend%29-testing-with-jest-and-cicleci)](https://github.com/niyibi250/MY_BLAND_BACKEND/actions/workflows/cont_int_testing.yml)

[![Node.js Continous Integration of MY BLAND](https://github.com/niyibi250/MY_BLAND_BACKEND/actions/workflows/cont_int_testing.yml/badge.svg)](https://github.com/niyibi250/MY_BLAND_BACKEND/actions/workflows/cont_int_testing.yml)