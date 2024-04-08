require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT || 3001
  },
  db: {
    uri: process.env.MONGODB_URI 
  },
  jwt: {
    secret: process.env.JWT_SECRET, 
    expiresIn: '24h'
  },
  
  refreshJwt: {
    secret: process.env.REFRESH_TOKEN_SECRET, 
  },
};

module.exports = config;