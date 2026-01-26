const { movieRatingGetAll, movieRatingGetByID, movieRatingInsert, movieRatingUpdate, movieRatingDelete } = require("../models/movieRating.model");

async function getAllMovieRating(){
    const data = await movieRatingGetAll();
    if(data){
        return{
            error : false, 
            data ,
            massage : "fatching all movie rating successfull"
        }
    }
    else {
        return {
            error : true ,
            massage : "some error occured in get all movie raing"
        }
    }
}


async function getMovieRatingByID(){
    const data = await movieRatingGetByID();
    if(data){
        return{
            error : false, 
            data ,
            massage : "fatching  movie rating by id successfull"
        }
    }
    else {
        return {
            error : true ,
            massage : "some error occured in get movie raing by id"
        }
    }
}
async function insertMovieRating(){
    const data = await movieRatingInsert();
    if(data){
        return{
            error : false, 
            data ,
            massage : "insert movie rating successfull"
        }
    }
    else {
        return {
            error : true ,
            massage : "some error occured in insert movie raing"
        }
    }
}
async function updateMovieRating(){
    const data = await movieRatingUpdate();
    if(data){
        return{
            error : false, 
            data ,
            massage : "update movie rating successfull"
        }
    }
    else {
        return {
            error : true ,
            massage : "some error occured in updating movie raing"
        }
    }
}
async function deleteMovieRating(){
    const data = await movieRatingDelete();
    if(data){
        return{
            error : false, 
            data ,
            massage : "delete movie rating successfull"
        }
    }
    else {
        return {
            error : true ,
            massage : "some error occured in deleting movie raing"
        }
    }
}

module.exports = {deleteMovieRating , updateMovieRating , insertMovieRating , getMovieRatingByID, getAllMovieRating}