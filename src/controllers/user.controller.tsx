import express, { Request, Response } from 'express';
import Validator from 'fastest-validator';
const models = require('../../models');
const bcryptjs=require('bcryptjs');
const jwt = require('jsonwebtoken');

    

function singUp(req: Request, res: Response) {
    models.User.findOne({where:{email:req.body.email}}).then((result: any)=>{
            if(result){
                res.status(500).json({
                    message: "Email already exist!",
                    
                });
            }else{
                bcryptjs.genSalt(10,function(err: any,salt: any){
                    bcryptjs.hash(req.body.password,salt,function(err: any,hash: any){
            
                        const user = {
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
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
            
                    });
                 
                });
            
            
            }
    }).catch((error: any)=>{
        res.status(500).json({
            message: "Somethig went wrong",
            error: error
        }); 
    })

  
    

}

function login(req: Request, res: Response) {
    models.User.findOne({where:{email:req.body.email}}).then((user:any) =>{
            if(user === null){
                res.status(401).json({
                    message: "Invalid credentials",
                   
                }); 
            }else{
                bcryptjs.compare(req.body.password,user.password,function(err: any,result: any){
                    if(result){
                        const jwtoken = jwt.sign({
                            email:user.email,
                            userId:user.Id
                        },process.env.JWT_KEY,function(err: any,token: any){
                            res.status(201).json({
                                message: "User Authentication succefully",
                                token : token 
                            });
                        });
                    }else{
                        res.status(401).json({
                            message: "Invalid credentials",
                           
                        });  
                    }
                });
            }
        }).catch((error: any)=>{
            res.status(401).json({
                message: "Invalid credentials",
               
            }); 
        });
}

module.exports = {
    singUp: singUp,
    login:login

 }