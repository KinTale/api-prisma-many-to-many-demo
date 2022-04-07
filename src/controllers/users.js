const prisma = require('../utils/prisma');

const getUsers = async(req, res) => {
    //TODO: Return a list of all users and the channels
    //they belong to

    const users = await prisma.findMany({
        include : {
            channels: true
        }
    })

    res.json({users: users})
}

module.exports = { getUsers };
