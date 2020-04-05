const multer = require('multer');
const { extname, resolve } = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      return cb(null, 'a' + Date.now() + extname(file.originalname));
    },
  }),
};
