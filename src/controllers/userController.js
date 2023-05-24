const createError = require('http-errors');
const users = require('../models/userModule');

const getUser = (req, res,next) => {
  try {
    console.log(req.body.id)
    res.status(200).send({
        message: 'This is very good api testing. User go to api calling',
        users
    });
  } catch (error) {
    next(error)
  }
};

module.exports = {getUser}