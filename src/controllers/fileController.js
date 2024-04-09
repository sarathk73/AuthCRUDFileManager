const path = require('path');
const fs = require('fs');
exports.uploadFile = (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }
    
    res.status(201).json({
      message: 'File uploaded successfully',
      filePath: req.file.path
    });
  };
  
  exports.downloadFile = (req, res, next) => {
    const filename = req.params.filename;
    
    
    const dirPath = path.join(__dirname, '..', '..', 'uploads');
  
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Unable to scan files: ' + err.message });
      }
      
      
      const fullFilename = files.find(f => f.includes(filename));
      
      if (!fullFilename) {
        return res.status(404).json({ error: 'File not found.' });
      }
      
      
      const filepath = path.join(dirPath, fullFilename);
      
      
      res.setHeader('Content-Disposition', 'attachment; filename="' + fullFilename + '"');
      
      res.download(filepath, fullFilename, (downloadErr) => {
        if (downloadErr) {
          console.error(downloadErr);
          res.status(500).json({ error: 'Could not download the file: ' + downloadErr.message });
        }
      });
    });
  };