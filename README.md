# API Documentation

## Overview

This application allows users to create organizations, manage members, and assign roles within those organizations. It includes authentication and authorization features to ensure that only authorized users can perform specific actions.

### Technologies Used

- Node.js:Backend framework
- Express:Web server framework
- MongoDB & Mongoose:Database and ORM
- Docker:Containerization for ease of deployment
- Joi:Validation library

## Environment Setup

Ensure you have the following tools installed:

- Node.js v-20
- MongoDB
- Docker

Clone the repository and install dependencies:

```bash
git clone https://github.com/AbdelRahmanH1/URL-Shortener-API.git
```

install dependencies

```bash
npm install
```

## Running Application

Run the project (development mode)

```bash
npm run dev
```

Run the Project (Production Mode)

```bash
npm start
```

## API Endponits

### CreateShortURL

- **Endpoint:** `POST /shorten`
- **Request Body:**
  ```json
  {
    "url": "http://www.example.com"
  }
  ```
  **Respone:**
  ```json
  {
    "success": "boolean",
    "link": "generated_short_url"
  }
  ```

### Redirect

- **Endpoint:** `GET /:shortUrl`
- **Response:** Redirects to the original URL

### Get stats

- **Endpoint:** `POST /stats/:shortUrl`
- **Response:**
  ```json
  {
    "original": "http://www.example.com",
    "shortId": "abcd1234",
    "clicks": 10,
    "expirationDate": "2024-11-14T12:34:56.789Z"
  }
  ```

# Models

## Link Model

### Link Schema

- **orignal**:**String** (required, unique) - the original long URL
- **shortId**:**String** (required, unique) - the shortened identifier
- **clicks**:**Number** (default: 0) - count of clicks on the shortened URL
- **expirationDate**:**Date**-set to expire 7 days from creation

## Middleware

### Validation Middleware

- Uses Joi to validate URLs before they are shortened.

### Error Handling

- Custom error responses are returned with appropriate HTTP status codes.

## Docker Setup

### Running Docker Compose

#### start the server

```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

#### Stopping the Services

```bash
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```

## Postman Collection

For easier API testing, you can import the Postman collection included in the repository:

1. Download the collection file: `URL Shortener API.postman_collection.json`
2. Open Postman, click _Import_, and select the collection file.

## Conclusion

This URL Shortener API is a practical backend project covering key concepts such as Docker containerization, database management, It is designed for scalability and efficient URL management. This documentation provides the details necessary to set up, run, and interact with the API effectively
