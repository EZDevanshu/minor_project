const db = require("../db/mysql")

async function getAll(){
    try{
         const [data , fields] = await db.query(`SELECT * from users`)
        return data;
    }
    catch(err){
        console.log("DB error :",err)
        throw err;
    }
}
 
async function getByID(id){
    try {
        const [data , fields] = await db.query(`SELECT * FROM users WHERE UserID=${id}`);
        return data[0];
    }
    catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const [data , fields] = await db.query(`INSERT INTO users VALUES ('NULL' , '${formData.UserName}' , '${formData.Password}')`) 
        return data;
    }
    catch(err) {
        console.log(err)
        throw err;
    }
}

async function getByUserName(un) {
    try{
        const [data , fields] = await db.query(`SELECT * FROM users WHERE UserName ='${un}'`)
        return data[0];
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
async function update(id , formData){
    try{
        const [data , fields] = await db.query(`UPDATE users set userName= '${formData.UserName}' , PassWord= '${formData.Password}' where UserID=${id}`) 
        return data
    }
    catch(err) {
        console.log(err)
        throw err;

    }
}

async function deleteById(id){
    try{
        const [data , fields] = await db.query(`DELETE FROM users where userID=${id}`) 
        return data
    }
    catch(err) {
        console.log(err)
        throw err;

    }
}
module.exports = {getAll ,getByID , insert ,update , deleteById , getByUserName} 