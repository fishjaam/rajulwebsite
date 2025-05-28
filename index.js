// Simple static server for Vercel
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // Get the path from the URL
  let filePath = req.url === '/' ? '/index.html' : req.url;
  
  // Clean any query parameters
  filePath = filePath.split('?')[0];
  
  // Resolve the path relative to the current directory
  const resolvedPath = path.join(__dirname, filePath);
  
  // Check if the file exists
  try {
    const stat = fs.statSync(resolvedPath);
    
    if (stat.isFile()) {
      // Set MIME types
      const extname = path.extname(resolvedPath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
      };
      
      // Set the Content-Type header
      const contentType = mimeTypes[extname] || 'application/octet-stream';
      res.setHeader('Content-Type', contentType);
      
      // Read and serve the file
      const fileContent = fs.readFileSync(resolvedPath);
      res.statusCode = 200;
      res.end(fileContent);
      return;
    }
  } catch (err) {
    // If the file doesn't exist, try index.html
    if (err.code === 'ENOENT' && !filePath.endsWith('.html')) {
      try {
        const indexPath = path.join(__dirname, 'index.html');
        const stat = fs.statSync(indexPath);
        
        if (stat.isFile()) {
          const fileContent = fs.readFileSync(indexPath);
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.end(fileContent);
          return;
        }
      } catch (indexErr) {
        // Index.html not found either, return 404
      }
    }
  }
  
  // File not found
  res.statusCode = 404;
  res.end('File not found');
}; 