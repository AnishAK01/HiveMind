const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Ensure this is present if needed

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary config: " + JSON.stringify({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? " Present" : " Missing",
}, null, 2));

module.exports = cloudinary;
