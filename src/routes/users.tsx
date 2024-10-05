import expres from 'express';

const UserController =require('../controllers/user.controller');

const router =expres.Router();

router.post("/sing-up",UserController.singUp);
router.post("/login",UserController.login);
/*router.get("/:id",postsController.show);
router.get("/",postsController.index);
router.patch("/:id",postsController.update);
router.delete("/:id",postsController.destroy);*/

module.exports=router;
