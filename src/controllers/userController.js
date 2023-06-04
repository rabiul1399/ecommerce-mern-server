const createError = require('http-errors');
const AllUser = require('../models/userModule');


const getUser = async (req, res, next) => {
  try {
    const users = await AllUser.find({})
    console.log(users)
    res.status(200).send({
      message: 'This is very good api testing. User go to api calling',
      user: users,
    });
  } catch (error) {

    next(error)
  }
};

module.exports = { getUser };