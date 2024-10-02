import expres from 'express';

const postsController =require('../controllers/post.contoller');

const router =expres.Router();

router.get("/",postsController.index);


module.exports=router;