
//Import express
import express,{Request,Response} from 'express';

import bodyParser from 'body-parser';
const cors = require("cors");
const app=express();


const commentRoute=require("./routes/comments");
const postRoute=require("./routes/posts");
const userRoute=require("./routes/users");
const imageRoute = require('./routes/images')
const associationsRoute=require("./routes/associations");
const usersPreferenceRoutes=require("./routes/userspreferences")
app.use(bodyParser.json());
app.use(cors());

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
//Create an instance of express


 module.exports=app;