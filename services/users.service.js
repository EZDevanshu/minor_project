const { getAll, getByID, insert, update, deleteById, getByUserName } = require("../models/users.model")

async function getAllUsers(){
    const data = await getAll()
    if(data){
        return {
            error : false,
            data ,
            massage : "user fetched success"
        };
    }
    else {
        return{
            error : true,
            massage : "some error occured"
        }
        ;
    }
}

async function getUserByID(id){
    const data = await getByID(id)
    if(data){
        return {
            error : false,
            data ,
            massage : "user fetched success"
        };
    }
    else {
        return{
            error : true,
            massage : "some error occured"
        }
        ;
    }
}

async function checkLogin(formData){
    const data = await getByUserName(formData.UserName)
    if(data){
        var token = jwt.sign(data, 'shhhhh');
        if(data.UserName === formData.UserName){
             return {
                error : false,
                data : token,
                massage : "user fetched success"
            };
        }   
        else{
            return{
            error : true,
            massage : "username or password incorrect"
            }
        }
    }
    else {
        return{
            error : true,
            massage : "username or password incorrect"
        }
        ;
    }
}


async function insertUser(formData){
    const data = await insert(formData)
    if(data){
        return { 
            error : false,
            data ,
            massage : "user fetched success"
        };
    }
    else {
        return{
            error : true,
            massage : "some error occured"
        };
    }
}

async function updateUser(id , formData){
    const data = await update(id , formData)
    if(data){
        return { 
            error : false,
            data ,
            massage : "user fetched success"
        };
    }
    else {
        return{
            error : true,
            massage : "some error occured"
        };
    }
}

async function deleteUser(id){
    const data = await deleteById(id)
    if(data){
        return { 
            error : false,
            data ,
            massage : "user fetched success"
        };
    }
    else {
        return{
            error : true,
            massage : "some error occured"
        };
    }
}

module.exports = {getAllUsers , getUserByID , updateUser , insertUser , deleteUser , checkLogin}