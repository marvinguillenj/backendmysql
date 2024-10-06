
function uploadfile(req:any,res:any){
    if(req.file.filename){
        res.status(201).json({
            message : "Image upload succesfully",
            url : req.file.filename,
            destination : req.file.destination
        });

    }else{
        res.status(500).json({
            message:"Something went wrong"
          
        });


    }

}
module.exports ={
    uploadfile : uploadfile
}