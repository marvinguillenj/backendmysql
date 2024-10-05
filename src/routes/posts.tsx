import expres from 'express';

const postsController =require('../controllers/post.contoller');
const checkAuthMiddleware = require("../middleware/check-auth");
const router =expres.Router();

router.post("/",checkAuthMiddleware.checkAuth,postsController.save);
router.get("/:id",postsController.show);
router.get("/",postsController.index);
router.patch("/:id",checkAuthMiddleware.checkAuth,postsController.update);
router.delete("/:id",checkAuthMiddleware.checkAuth,postsController.destroy);
module.exports=router;