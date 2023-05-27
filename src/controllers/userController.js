const createError = require('http-errors');
const Users = require('../models/userModule');


const getUser = (req, res,next) => {
  try {
    console.log(Users)
    res.status(200).send({
        message: 'This is very good api testing. User go to api calling',
        user: Users,
    });
  } catch (error) {
    
    next(error)
  }
};

module.exports = {getUser};