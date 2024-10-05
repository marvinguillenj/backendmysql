import express, { Request, Response } from 'express';
/*function index(req: Request, res: Response){

    const posts="Post List";
    res.json({
        success:1,
        message: 'This is rest Api working',
        data:posts
    });
}*/
const models = require('../../models')
function save(req: Request, res: Response) {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        userId: 1
    }
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
function update(req:Request,res:Response){
    const id = req.params.id;
    const updatePost={
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
      
    }
    const userId=1;

    models.Post.update(updatePost,{where:{id:id,userId:userId}}).then((result: any)=> {
            res.status(200).json({ message: "Post updated succefully",
                post: updatePost});
    }).catch((error: any)=>{
            res.status(500).json({
                message: "Somethig went wrong",
            error: error
            })
    });
}
function destroy(req:Request,res:Response){
    const id = req.params.id;
    const userId=1;

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