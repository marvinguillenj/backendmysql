
import express, { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from 'sequelize/types/sequelize';
const models = require('../../models');

function save(req:any, res:any){
    const usersPreference={
        bgcolor:req.body.bgcolor,
        gender:req.body.gender,
        userId:req.body.userId,
        bgcolorsmall:req.body.bgcolorsmall,
        isActived:req.body.isActived,
        emotionsmessage:req.body.emotionsmessage
  
    }
    models.Userspreference.findOne( {where:{userId:req.body.userId}})
    .then((result:any)=>{
        if(result){
            res.status(500).json({
                message: "The user id exist on the table",
                
            });
        }else{
            models.Userspreference.create(usersPreference).then((result: any) => {
                res.status(201).json({
                    message: "User Preferences created succefully",
                    user: result
                });
            }).catch((error: any) => {
                res.status(500).json({
                    message: "Somethig went wrong",
                    error: error
                });
        
            });
        }
    })
    .catch((error:any)=>{
        res.status(500).json({
            message: "Somethig went wrong",
            error: error
        });
    })
    
   
}
async function listUsersPreferences(req:any, res:any){
   const userpreferences= await models.sequelize.
   query(`SELECT  TABLEA.id,TABLEA.Name AS first_name,TABLEB.bgcolor,TABLEB.isActived,TABLEB.emotionsmessage,
    TABLEB.bgcolorsmall,TABLEB.gender FROM database_development.users as TABLEA	
    INNER JOIN database_development.userspreferences AS TABLEB
        ON TABLEA.ID = TABLEB.userId
        WHERE TABLEB.isActived=1
            ;`,{
        type: QueryTypes.SELECT,
      }).then((result:any)=>{
        res.status(200).json({ message: "User Proference updated succefully",
            userspreference: result});

      })
      .catch((error:any)=>{
        res.status(500).json({
            message: "Something went wrong",
            error: error    
        })
      })
     // console.log(userpreferences);
   /* const { QueryTypes } = require('sequelize');
    const users = await sequelize.query('SELECT * FROM `users`', {
     type: QueryTypes.SELECT,
        });*?
   // const [results, metadata] = await sequelize.query('UPDATE users SET y = 42 WHERE x = 12');
// Results will be an empty array and metadata will contain the number of affected rows.
*/}

function updatepreferences(req:any, res:any){
        models.Userspreference.findOne( {where:{userId:req.body.userId}})
        .then((result:any)=>{
            if(result){
                const usersPreference={
                    bgcolor:req.body.bgcolor,
                    gender:req.body.gender
                }
                models.Userspreference.update(usersPreference,{where:{userId:req.body.userId}})
                .then((result:any)=>{
                    res.status(200).json({ message: "User Proference updated succefully",
                        userspreference: usersPreference});
                })
                .catch((error: any)=>{
                    res.status(500).json({
                        message: "Somethig went wrong",
                    error: error
                    })
                });
            }else{
                res.status(500).json({
                    message: "The userid is not exist on the table",
                   // error: error
                });
        
            }
        })
        .catch((error:any)=>{
            res.status(500).json({
                message: "Something went wrong",
                error: error    
            })
        })
}
module.exports = {
    
    updatepreferences:updatepreferences,
    listUsersPreferences:listUsersPreferences,
    save:save

 }