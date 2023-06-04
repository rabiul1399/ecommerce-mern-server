const data = require("../data");
const AllUser = require("../models/userModule");



const seedUser = async (req, res, next) => {
    try {
        // deleting all existion users
        await AllUser.deleteMany({});

        // instering new users 
        const users = await AllUser.insertMany(data.allUsers)
    

        // // successful response 
        return res.status(201).json(users);

        // // get all data users

        // // await Users.insertMany({});

        // const user = await Users.insertMany(data.allUsers)

        // return res.status(201).send(user);



    } catch (error) {
        next(error)
    }
};


module.exports = seedUser