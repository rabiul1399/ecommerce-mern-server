const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');
const connectDB = async (optins = {}) => {
    try {
        await mongoose.connect(mongodbURL, optins);
        console.log('Connection to Db sussceefylly');
        mongoose.connection.on('error', (error) => {
            console.error('DB connecton error')
        })
    } catch (error) {
        console.error('could not connected db', error.toString)
    }
};

module.exports = connectDB