import express, { Request, Response } from 'express';
//import { QueryTypes } from 'sequelize';
//import sequelize from 'sequelize/types/sequelize';
const models = require('../../models');

function save(req:any, res:any){
    const queueoption={
        nameQueue: req.body.nameQueue,
        isActived: req.body.isActived,
        dateBegin: req.body.dateBegin,
        dateEnd: req.body.dateEnd
    
        
    }
    models.BypassQueues.findOne( {where:{nameQueue:req.body.nameQueue}})
    .then((result:any)=>{
        if(result){
            res.status(500).json({
                message: "The name of Queue exist on the table",
                
            });
        }else{
            models.BypassQueues.create(queueoption).then((result: any) => {
                res.status(201).json({
                    message: "Queues Option created succefully",
                    queuesoption: result
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
function index(req:Request,res:Response){
    
    models.BypassQueues.findAll().then((result: any)=> {
            res.status(200).json({ message: "QueuesOption all list",
                QueuesOption: result});
    }).catch((error: any)=>{
            res.status(500).json({
                message: "Somethig went wrong",
            error: error
            })
    });
}

function updateQueuesOption(req:any, res:any){
        models.BypassQueues.findOne( {where:{Id:req.body.id}})
        .then((result:any)=>{
            if(result){
                const queueoption={
                    nameQueue: req.body.nameQueue,
                    isActived: req.body.isActived,
                    dateBegin: req.body.dateBegin,
                    dateEnd: req.body.dateEnd
                
                    
                }
                
                models.BypassQueues.update(queueoption,{where:{Id:req.body.id}})
                .then((result:any)=>{
                    res.status(200).json({ message: "QueuesOption updated succefully",
                        queueoption: queueoption});
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
function findoneQueuesOptionId(req:any, res:any){
    models.BypassQueues.findOne( {where:{Id:req.body.id}})
    .then((result:any)=>{
        if(result){
            const ResultQueuesOption={
                nameQueue: result.nameQueue,
                isActived: result.isActived,
                dateBegin: result.dateBegin,
                dateEnd: result.dateEnd
            
                 }
                res.status(200).json({ message: "QueuesOption exist ",
                    queueoption: ResultQueuesOption});
            
        }else{
            res.status(500).json({
                message: "The QueuesOption is not exist on the table",
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
    
    updateQueuesOption:updateQueuesOption,
    index:index,
    save:save,
    findoneQueuesOptionId:findoneQueuesOptionId

 }