const multer = require('multer');
const path = require('path');


const fileStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});


const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.png', '.jpg', '.jpeg', '.gif', '.pdf'];
  if (!allowedTypes.includes(path.extname(file.originalname).toLowerCase())) {
    cb(new Error('Unsupported file type'), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  },
  fileFilter: fileFilter
});

module.exports = upload;