import express, { Request, Response } from 'express';
import Validator from 'fastest-validator';
/*function index(req: Request, res: Response){

    const posts="Post List";
    res.json({
        success:1,
        message: 'This is rest Api working',
        data:posts
    });
}*/
const models = require('../../models')
function save(req: any, res: any) {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        userId: req.userData.userId
    }
    const schema ={
        title:{type:"string",optional:false,max:"100"},
        content:{type:"string",optional:false,max:"500"},
        categoryId:{type:"number",optional:false}

    }
    const v=new Validator();
    const validationResponse=v.validate(post,schema);
    if(validationResponse!==true){
    
        return res.status(400).json({
            message: "Validation failed",
            error: validationResponse
        });
       
    }
    models.Category.findByPk(req.body.categoryId).then((result: null)=>{
        if(result !== null){
            models.Post.create(post).then((result: any) => {
                res.status(201).json({
                    message: "Post created succefully",
                    post: result
                });
            }).catch((error: any) => {
                res.status(500).json({
                    message: "Somethig went wrong",
                    error: error
                });
        
            });
        }else{
            res.status(400).json({
                message: "Invalid Category ID",
               
            });
        }
    });
    

}
function show(req:Request,res:Response){
    const id = req.params.id;
    models.Post.findByPk(id).then((result: any)=> {
           if(result){
            res.status(200).json({ message: "Post found succefully",
                post: result});
            }else{
                res.status(500).json({
                    message: "Post not found",
                
                })
            }
    }).catch((error: any)=>{
            res.status(500).json({
                message: "Somethig went wrong",
            error: error
            })
    });
}
/*app.get('/api',(req:Request,res:Response)=>{
    res.json({
        success:1,
        message: 'This is rest Api working'
    });
}
);*/
function index(req:Request,res:Response){
    
    models.Post.findAll().then((result: any)=> {
            res.status(200).json({ message: "Post all list",
                post: result});
    }).catch((error: any)=>{
            res.status(500).json({
                message: "Somethig went wrong",
            error: error
            })
    });
}
function update(req:any,res:any){
    const id = req.params.id;
    const updatePost={
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
      
    }
    const schema ={
        title:{type:"string",optional:false,max:"100"},
        content:{type:"string",optional:false,max:"500"},
        categoryId:{type:"number",optional:false}

    }
    const v=new Validator();
    const validationResponse=v.validate(updatePost,schema);
    if(validationResponse!==true){
    
        return res.status(400).json({
            message: "Validation failed",
            error: validationResponse
        });
       
    }
    const userId=req.userData.userId;
    models.Category.findByPk(req.body.categoryId).then((result: null)=>{
        if(result !== null){
            models.Post.update(updatePost,{where:{id:id,userId:userId}}).then((result: any)=> {
                res.status(200).json({ message: "Post updated succefully",
                    post: updatePost});
        }).catch((error: any)=>{
                res.status(500).json({
                    message: "Somethig went wrong",
                error: error
                })
        });
        }else{
            res.status(400).json({
                message: "Invalid Category ID",
               
            });
        }
    });
   
    
}
function destroy(req:any,res:any){
    const id = req.params.id;
    const userId=req.userData.userId;

    models.Post.destroy({where:{id:id,userId:userId}}).then((result: any)=> {
            res.status(200).json({ message: "Post deleted succefully",
                post: result});
    }).catch((error: any)=>{
            res.status(500).json({
                message: "Somethig went wrong",
            error: error
            })
    });
}

module.exports = { 
        show:show,
        save: save,
        index:index,
        update:update,
        destroy:destroy 
};