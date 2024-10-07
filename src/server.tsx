
// Import the 'express' module
import { error } from 'console';
import express,{ Request, Response }  from 'express';

//import {User,getUser} from './db'
const dataBase = require('../models');
//const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];

import http from 'http';


const app  = require('./app');

const port:number =7000;
// Create an Express application
//
// Specify the port number for the server
/*const mysql = require('mysql2/promise');
    
    mysql.createConnection({
        host   : config.localhost,   
        user     : config.username,
        password : config.password,
        database : config.dataBase
    }).then((connection: { query: (arg0: string) => Promise<any>; }) => {
        connection.query('CREATE DATABASE IF NOT EXISTS database_development;').then(() => {
            // Safe to use sequelize now
           console.log("Database of development exist now!!!!!");
        }).catch((error): void=>{
            console.log(error);
        });
    })
 */

dataBase.sequelize.sync().then(()=>{
    const server =http.createServer(app);

    server.listen(port,()=>{
        console.log(`Server is running on  http://localhost:${port}`);
    });
});
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
