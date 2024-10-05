import expres from 'express';

const commentController =require('../controllers/comment.controller');

const router =expres.Router();

router.post("/",commentController.save);

module.exports=router;