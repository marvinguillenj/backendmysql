
//Import express
import express,{Request,Response} from 'express';

import bodyParser from 'body-parser';

const app=express();


const commentRoute=require("./routes/comments");
const postRoute=require("./routes/posts");
const userRoute=require("./routes/users");
//const userSysRoute=require("./routes/usersys");

app.use(bodyParser.json());
/*
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })


*/
  app.get('/blog', (req: Request, res: Response) => {
    res.send('Hello blog!')
  })

app.use('/comments',commentRoute);
app.use('/posts',postRoute);
app.use('/users' , userRoute);
//app.use('/user' , userSysRoute);

//Create an instance of express


 module.exports=app;