const { User } = require("./Usermodel")
const UserData = require("../dataBase/UserData")

const insertMany = async (request, response) => {
    try {
        await User.addUser(UserData);
        console.log("seeded")
    }
    catch (error) {
        console.log(error)
    }
}
insertMany()