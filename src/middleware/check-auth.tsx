import { json } from 'body-parser';
import {Response, Request} from 'express';
const jwt = require('jsonwebtoken');

function checkAuth(req:any,res:Response,next:any){
    try{
            const token = req.headers.authorization?.split(" ")[1];
            const decodetoken = jwt.verify(token,process.env.JWT_KEY);
            req.userData=decodetoken;
            next();
    }catch(error){
            return res.status(401).json({
                    "message":"Invalid or expired token provided!",
                    'error' : error
            });
    }
    
}
module.exports = {
    checkAuth : checkAuth
}