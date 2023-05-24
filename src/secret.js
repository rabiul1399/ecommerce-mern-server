require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 4000;
const mongodbURL = process.env.MONGODB_ATLAS_URL || "localhost:27017";

module.exports = { serverPort, mongodbURL }