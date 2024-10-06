const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
        destination:function(req: any,file: any,cb:any){
            cb(null,'./uploads');
        },
        filename:function(req: any,file: { originalname: any; },cb:any){
            cb(null, new Date().getTime() + path.extname(file.originalname));
        }
});

const fileFilter = (req: any,file: any,cb:any)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(new Error('Unsupported Files'),false);
    }
}

const upload = multer({
        storage: storage,
        limits:{
            fileSize:1024*1024*10
        },
        fileFilter:fileFilter
});


module.exports={
    upload:upload
}