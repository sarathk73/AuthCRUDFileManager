const swaggerJsdoc = require('swagger-jsdoc');
const { version } = require('../../package.json'); 

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AuthCRUDFileManager API",
      version,contact: {
        name: 'Sarath K', 
        email: 'amssarath@gmail.com', 
      },
      description:
        "AuthCRUDFileManager is a comprehensive backend solution developed with Node.js that provides user authentication using JSON Web Tokens (JWT), a simple CRUD API for resource management, and a file upload and download capability integrated with a secure system documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3001/api",
      },
    ],
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
      security: [
        {
          bearerAuth: []
        }
      ]
  },
  apis: [
    "./src/routes/*.js", 
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;