import expres from 'express';

const usersPreferenceController =require('../controllers/userspreference.controller');

const router =expres.Router();

router.post("/save",usersPreferenceController.save);
router.post("/update",usersPreferenceController.updatepreferences);
router.get("/listuserspreferences",usersPreferenceController.listUsersPreferences);
/*router.get("/:id",postsController.show);

router.patch("/:id",postsController.update);
router.delete("/:id",postsController.destroy);*/

module.exports=router;
