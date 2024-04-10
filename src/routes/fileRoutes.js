const router = require('express').Router();
const fileController = require('../controllers/fileController');
const fileUploadMiddleware = require('../middlewares/fileUploadMiddleware');

/**
 * @swagger
 * /files/upload:
 *   post:
 *     summary: Upload a file
 *     tags: [File Operations]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: File uploaded successfully
 *       400:
 *         description: No file uploaded or file upload error
 */
router.post('/upload', fileUploadMiddleware.single('file'), fileController.uploadFile);

/**
 * @swagger
 * /files/download/{filename}:
 *   get:
 *     summary: Download a file
 *     tags: [File Operations]
 *     parameters:
 *       - in: path
 *         name: filename
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the file to download
 *     responses:
 *       200:
 *         description: File downloaded successfully
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: File not found
 */
router.get('/download/:filename', fileController.downloadFile);

module.exports = router;