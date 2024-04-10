# AuthCRUDFileManager

AuthCRUDFileManager is a Node.js-based API solution for secure authentication, CRUD operations, and file management. This API leverages modern security practices to offer a robust backend suitable for various applications requiring user management and file storage capabilities.

## Features

- JWT (JSON Web Tokens) based authentication system.
- CRUD operations for user management.
- Secure file upload and management.
- Input validation to ensure data integrity.
- Error handling middlewares for graceful error responses.
- Swagger documentation for API endpoints.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```
node.js
npm
A MongoDB database
```
### Installation

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
```bash
   git clone https://github.com/sarathk73/AuthCRUDFileManager.git
   cd AuthCRUDFileManager


```
Install the necessary node modules:
 ```bash
   npm install
```


### Configuration

Configure your environment variables appropriately:
```plain
Create a .env file in the root directory and add the following:
DB_CONNECTION=mongodb+srv://your-db-connection-string
JWT_SECRET=your-secret
# JWT secret for signing tokens
JWT_SECRET=your-secret

# Refresh token secret for signing refresh tokens
REFRESH_TOKEN_SECRET=your-secret

PORT=3001
```

### Usage
Start the application with the following command:
```bash
node server.js  # Starts the server
```
### Endpoints Overview
User Registration:POST /api/auth/register
User Login:POST /api/auth/login
Token Refresh:POST /api/auth/refresh
<br/>
CRUD for Resources:
Create: POST /api/resource/
Read: GET /api/resource/:id
Update: PUT /api/resource/:id
Delete: DELETE /api/resource/:id
<br/>
File Upload:POST /api/files/upload
File Download:GET /api/files/download/:filename
### Running Tests
To run the automated tests for this system, use:
bash
npm test
Built With
Express.js - The web framework used
MongoDB - Database
jsonwebtoken - JWT generation and verification
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.
Versioning
We use SemVer for versioning.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
