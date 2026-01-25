var jwt = require('jsonwebtoken');

function userMiddleware(req , res , next){
    try{
        if(req.url.toString().indexOf('login') > -1){
            next();
        }
        else{
            var decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'shhhhh');
            next();
        } 
    }
    catch(err){
        res.status(401).send({error : err , massage : "unauthorized"})
    }
}

module.exports = {userMiddleware}