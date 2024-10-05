import express, { Request, Response } from 'express';
import Validator from 'fastest-validator';
const models = require('../../models');
const bcryptjs=require('bcryptjs');
const jwt = require('jsonwebtoken');


function singUp(req: Request, res: Response) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
       }
    const schema ={
        name:{type:"string",optional:false,max:"100"},
        email:{type:"string",optional:false,max:"100"},
        password:{type:"string",optional:false}

    }
    const v=new Validator();
    const validationResponse=v.validate(user,schema);
    if(validationResponse!==true){
    
        return res.status(400).json({
            message: "Validation failed",
            error: validationResponse
        });
       
    }
    models.User.create(user).then((result: any) => {
        res.status(201).json({
            message: "User created succefully",
            user: result
        });
    }).catch((error: any) => {
        res.status(500).json({
            message: "Somethig went wrong",
            error: error
        });

    });

}

module.exports = {
    singUp: singUp
 }