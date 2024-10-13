
//Import express
import express,{Request,Response} from 'express';

import bodyParser from 'body-parser';
const cors = require("cors");
const app=express();
const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const commentRoute=require("./routes/comments");
const postRoute=require("./routes/posts");
const userRoute=require("./routes/users");
const imageRoute = require('./routes/images')
const associationsRoute=require("./routes/associations");
const usersPreferenceRoutes=require("./routes/userspreferences")


const options = {
      definition:{
        openapi : '3.0.0',
        info: {
                title : 'Node JS API Project',
                version: '1.0.0'

        },
        servers: [
          {
            url : 'http://localhost:7000'
          }
        ]
      },
      apis:['./routes/*.js'],
}
const swaggerSpec = swaggerJSDoc(options);
app.use(bodyParser.json());


app.use(cors());

/**
 * @swagger
 * /:
 *   get:
 *     summary: Test the server
 *     tags: [None]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
//Test the server
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World User Test01!')
  })



  app.get('/blog', (req: Request, res: Response) => {
    res.send('Hello blog!')
  })

app.use('/uploads',express.static('uploads'));
app.use('/comments',commentRoute);
app.use('/posts',postRoute);
app.use('/users' , userRoute);
app.use('/images' , imageRoute);
app.use('/tests' , associationsRoute);
app.use('/userspreference',usersPreferenceRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.serve,swaggerUi.setup(swaggerSpec));
//Create an instance of express


 module.exports=app;