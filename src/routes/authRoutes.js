const router = require('express').Router();
const { registerUser, loginUser, refreshToken } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh', refreshToken);

module.exports = router;