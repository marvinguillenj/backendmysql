import express,{Request,Response} from 'express';
function index(req: Request, res: Response){

    const posts="Post List";
    res.json({
        success:1,
        message: 'This is rest Api working',
        data:posts
    });
}
  
/*app.get('/api',(req:Request,res:Response)=>{
    res.json({
        success:1,
        message: 'This is rest Api working'
    });
}
);*/

module.exports={index:index}