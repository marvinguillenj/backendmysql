import expres from 'express';

const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');
const checkAuthMiddleware = require("../middleware/check-auth");



const router =expres.Router();

router.post("/uploads",checkAuthMiddleware.checkAuth,imageUploader.upload.single('image'),
        imageController.uploadfile);

module.exports=router;
