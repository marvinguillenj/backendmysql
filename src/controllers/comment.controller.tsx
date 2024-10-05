import express, { Request, Response } from 'express';

const models = require('../../models')

function save(req: Request,res: Response){
    const commentnew={
        content : req.body.content,
        postId : 8,
        userId:1
    }

//content: DataTypes.TEXT,
  //  postId: DataTypes.INTEGER,


  models.Comment.create(commentnew).then((result: any) => {
    res.status(201).json({
        message: "Comment created succefully",
        post: result
    });
  }
  ).catch(
    (error: any) => {
        res.status(500).json({
            message: "Somethig went wrong",
            error: error
        });

    }
  )


}
module.exports = {
    save:save
}