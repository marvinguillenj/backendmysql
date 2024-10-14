import expres from 'express';

const queuesOptionsController =require('../controllers/queues.controller');
const checkAuthMiddleware = require("../middleware/check-auth");
const router =expres.Router();

router.post("/save",queuesOptionsController.save);
router.post("/findoneBypassQueuesId",queuesOptionsController.findoneQueuesOptionId);
router.get("/",queuesOptionsController.index);
router.post("/updateBypassQueues",queuesOptionsController.updateQueuesOption);
//router.delete("/:id",checkAuthMiddleware.checkAuth,postsController.destroy);
module.exports=router;