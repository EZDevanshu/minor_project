const db = require('../db/mysql')

async function movieGetAll(){
    try{
        const [data , fields] = await db.query(`SELECT * FROM movies`)
        return data;
    }
    catch(err) {
        console.log("some error accured in get all movies : " , err)
        return err;
    }
}

async function movieGetByID(id) {
    try{
        const [data , fields] = await db.query(`select * from movies where movieID = ${id}`)
        return data[0];
    }
    catch(err){
        console.log("some error accured in get By id Movie :" , err)
        return err;
    }
}


async function movieInsert(formData) {
    try{
        const [data , fields] = await db.query(`insert into movies values ('NULL' , '${formData.MovieName}' , '${formData.MovieImage}')`)
        return data;
    }
    catch(err){
        console.log("some error accured in insert Movie :" , err)
        return err;
    }
}


async function movieUpdate(id, formData) {
    try{
        const [data , fields] = await db.query(`update movies set MovieName = '${formData.MovieName}' , MovieImage = '${formData.MovieImage}' where movieID = ${id}`)
        return data;
    }
    catch(err){
        console.log("some error accured in update Movie :" , err)
        return err;
    }
}


async function movieDelete(id) {
    try{
        const [data , fields] = await db.query(`delete from movies where movieID = ${id}`)
        return data;
    }
    catch(err){
        console.log("some error accured in try to delete Movie :" , err)
        return err;
    }
}

module.exports = {movieDelete , movieUpdate  , movieInsert , movieGetByID , movieGetAll}