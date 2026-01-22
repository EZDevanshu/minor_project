const { getAll } = require("../models/users.model")

async function getAllUsers(){
    return await getAll();
}

function getUserByID(id){
    return "get user by id service called"
}

function insertUser(formData){
    return "insert user service called"
}

function updateUser(id , formData){
    return "update user service called"
}

function deleteUser(td){
    return "delete user service called "
}

module.exports = {getAllUsers , getUserByID , updateUser , insertUser , deleteUser}