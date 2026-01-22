const {createPool} = require("mysql2/promise")

const db = createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "minor_project",
    connectionLimit : 10
});

console.log("query type : ", typeof db.query);

module.exports = db