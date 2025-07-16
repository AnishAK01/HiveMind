const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');
const multer = require('multer');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'InspireHub_Posts',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

const parser = multer({ storage });
module.exports = parser;
