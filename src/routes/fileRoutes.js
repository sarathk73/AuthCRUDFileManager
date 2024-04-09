const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const fileUploadMiddleware = require('../middlewares/fileUploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload', authMiddleware, fileUploadMiddleware.single('file'), fileController.uploadFile);
router.get('/download/:filename', authMiddleware, fileController.downloadFile);

module.exports = router;