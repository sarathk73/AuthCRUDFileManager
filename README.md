# AuthCRUDFileManager
<b>AuthCRUDFileManager is a Node.js-based API solution for secure authentication, CRUD operations, and file management. This API leverages modern security practices to offer a robust backend suitable for various applications requiring user management and file storage capabilities.</b>

![Swagger UI](/images/task2_1.png)
![Swagger UI](/images/task2_2.png)

## Features

- JWT (JSON Web Tokens) based authentication system.
- CRUD operations for user management.
- Secure file upload and management.
- Input validation to ensure data integrity.
- Error handling middlewares for graceful error responses.
- Swagger documentation for API endpoints.

## Structure

Below is an outline of the important files and folders included in the AuthCRUDFileManager project:
```
/AuthCRUDFileManager
|-- /node_modules
|-- src
    |-- /config
        |-- config.js
        |-- swagger.js
    |-- /controllers
        |-- authController.js
        |-- userController.js
        |-- fileController.js
        |-- validation.js
    |-- /middleware
        |-- authMiddleware.js
        |-- errorHandler.js
        |-- fileUploadMiddleware.js
    |-- /models
        |-- userModel.js
        |-- taskModel.js
    |-- /routes
        |-- authRoutes.js
        |-- userRoutes.js
        |-- fileRoutes.js
|-- /uploads
|-- /postman
        |--AuthCRUDFileManager.json
|-- server.js
|-- .gitignore
|-- .env
|-- README.md
|-- package-loack.json
|-- package.json

```

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
Start the server:
```
npm start
```
The server will start on port 3001 or the next available port.


### API Documentation
The API documentation is provided via Swagger, which outlines all the routes, possible parameters, and responses. Access the interactive documentation at:
```bash
http://localhost:3001/api-docs
```
Replace http://localhost:3001 with your production URL if applicable

### Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

### Authors

- Sarath K - Initial work - [sarathk73](https://github.com/sarathk73)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
### Acknowledgments

<ul>
   <li>Hat tip to anyone whose code was used</li>
   <li>Inspiration</li>
   <li>Etc</li>
</ul>
