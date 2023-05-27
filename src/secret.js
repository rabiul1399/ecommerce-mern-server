require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 4000;
const mongodbURL = process.env.MONGODB_ATLAS_URL || "localhost:27017";

const defaultImagePath = process.env.DEFAULT_USER_IMAGE || '../public/images/products/rachit-tank-2cFZ_FB08UM-unsplash.jpg';

module.exports = { serverPort, mongodbURL, defaultImagePath }