"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var app = require('./app');
var port = 7000;
// Create an Express application
//
// Specify the port number for the server
var server = http_1.default.createServer(app);
/*
app.get('/apinew',(req:Request,res:Response)=>{
    res.json({
        success:1,
        message: 'This is rest Api working'
    });
}
);


app.get('/user/:id',(req:Request,res:Response)=>{
    //console.log('This is a function previo')
    const id=parseInt(req.params.id);
    const user:User|undefined=getUser(id)
    if(user){

        res.json({
            success:1,
            message:'The action executed right.',
            data:user
        })
    }else{
        res.status(404).send('This User was not finding')
    }
})

// Define a route for the root path ('/')

app.get('/',(req:Request,res:Response)=>{
    //Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express Hello Diany!')
})
*/
//Version of test api form mysql
/*app.get('/',(req: any,res: { send: (arg0: string) => void; })=>{
    res.send('Hello this is my first project');
});
*/
server.listen(port, function () {
    console.log("Server is running on  http://localhost:".concat(port));
});
