
//Import express
import express,{Request,Response} from 'express';

import bodyParser from 'body-parser';

const app=express();



const postRoute=require("./routes/posts");

app.use(bodyParser.json());
/*
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })


*/
  app.get('/blog', (req: Request, res: Response) => {
    res.send('Hello blog!')
  })


app.use('/posts',postRoute);


//Create an instance of express


 module.exports=app;