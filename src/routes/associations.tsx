import expres from 'express';

const associationsController =require('../controllers/test.controller');

const router =expres.Router();

router.get("/associations/:id",associationsController.test);

module.exports=router;