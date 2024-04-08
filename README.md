# AuthCRUDFileManager

AuthCRUDFileManager is a comprehensive backend solution developed with Node.js that provides user authentication using JSON Web Tokens (JWT), a simple CRUD API for resource management, and a file upload and download capability integrated with a secure system.

## Features

- **User Authentication**: Utilizes JWT for secure user authentication, including endpoints for registration, login, and token refresh.
- **CRUD API**: Full Create, Read, Update, Delete API functionality for managing resources, such as users, products, or tasks.
- **File Management**: API endpoints designed for secure file uploading and downloading with type validation and size limitation.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm (Node Package Manager)
- MongoDB (or other preferred databases)

### Installation

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
```bash
   git clone https://github.com/sarathk73/AuthCRUDFileManager.git
```

### Configuration

Configure your environment variables appropriately:
env
# .env file
```text

DB_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your_secret_key
```

### Usage
Start the application with the following command:
```bash
node server.js  # Starts the server
```

Register User
http
POST /api/auth/register
Login User
http
POST /api/auth/login
Refresh Token
http
POST /api/auth/refresh
CRUD Operations
http
# Create a resource
POST /api/resource/

# Read a resource
GET /api/resource/:id

# Update a resource
PUT /api/resource/:id

# Delete a resource
DELETE /api/resource/:id
File Upload
http
POST /api/files/upload
Download File
http
GET /api/files/download/:filename
Running Tests
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
