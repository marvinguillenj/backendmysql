import expres from 'express';

const postsController =require('../controllers/post.contoller');

const router =expres.Router();

router.post("/",postsController.save);
router.get("/:id",postsController.show);
router.get("/",postsController.index);
router.patch("/:id",postsController.update);
router.delete("/:id",postsController.destroy);
module.exports=router;