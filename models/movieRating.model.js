const db = require('../db/mysql');

async function movieRatingGetAll(){
    try{
        const [data , fields] = await db.query(`select * from movie_rating`);
        return data;
    }
    catch(err){
        console.log("some error occured in geting movie rating : ", err);
        return err;
    }
}

async function movieRatingGetByID(id){
    try{
        const [data , fields] = await db.query(`select * from movie_rating where RatingID = ${id}`);
        return data[0];
    }
    catch(err){
        console.log("some error occured in geting movie rating by id : ", err);
        return err;
    }
}
async function movieRatingInsert(formData){
    try{
        const [data , fields] = await db.query(`insert into movie_rating value ('NULL' , 'NULL' , 'NULL' , '${formData.RatingStart}' , '${formData.RatingComment}')`);
        return data;
    }
    catch(err){
        console.log("some error occured in inserting movie rating : ", err);
        return err;
    }
}
async function movieRatingUpdate(id , formData){
    try{
        const [data , fields] = await db.query(`update movie_rating set '${formData.RatingStart}' , '${formData.RatingComment}' where RatingID = ${id}`);
        return data;
    }
    catch(err){
        console.log("some error occured in updating movie rating : ", err);
        return err;
    }
}
async function movieRatingDelete(id){
    try{
        const [data , fields] = await db.query(`delete form movie_rating where RatingID = ${id}`);
        return data;
    }
    catch(err){
        console.log("some error occured in deleting movie rating : ", err);
        return err;
    }
}
module.exports = {movieRatingDelete , movieRatingGetAll , movieRatingGetByID , movieRatingInsert, movieRatingUpdate}