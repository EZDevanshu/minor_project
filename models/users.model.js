const db = require("../db/mysql")

async function getAll(){
    const [data , fields] = await db.query("SELECT * from users")
    return data;
}


module.exports = {getAll}