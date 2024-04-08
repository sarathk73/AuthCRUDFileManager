const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config/config');

module.exports = (req, res, next) => {
    
    const authHeader = req.header('Authorization');
    
 
    if (!authHeader) {
        return res.status(401).send('Access denied. No token provided.');
    }

    
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).send('Access denied. Token is not valid Bearer token.');
    }

   
    const token = authHeader.replace('Bearer ', '');
    
    try {
       
        const decoded = jwt.verify(token, jwtConfig.secret);
       
        req.user = decoded;
       
        next();
    } catch (ex) {
        
        res.status(400).send('Invalid token.');
    }
};