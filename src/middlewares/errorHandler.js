function errorResponse(res, status, message) {
    return res.status(status).json({
      status: 'error',
      message,
    });
  }
  
  function errorHandler(err, req, res, next) {
    if (err instanceof SyntaxError) {
      // Handle JSON parse error
      return errorResponse(res, 400, 'Invalid JSON payload');
    } else if (err instanceof multer.MulterError) {
      // Handle multer errors 
      return errorResponse(res, err.statusCode || 400, err.message);
    } else if (err.name === 'ValidationError') {
      // Handle Joi validation errors, or similar validation libraries
      const messages = err.details.map(detail => detail.message).join(', ');
      return errorResponse(res, 400, messages);
    } else if (err.name === 'UnauthorizedError') {
      // Handle JWT authentication errors
      return errorResponse(res, 401, 'Invalid token');
    } else if (err.code && err.code === 'ESERVFAIL') {
      // Handle specific MongoDB connection error
      return errorResponse(res, 503, 'Service unavailable. Cannot connect to the database.');
    } else if (err.code && err.code === 'ENOENT') {
      // Handle file not found errors
      return errorResponse(res, 404, 'File not found');
    } else if (err.code && err.code === 'ER_DUP_ENTRY') {
      // Handle duplicate entry error for databases
      return errorResponse(res, 409, 'Duplicate entry');
    }
  
    // Generic server errors
    return errorResponse(res, 500, 'An unexpected error occurred');
  }
  
  module.exports = errorHandler;