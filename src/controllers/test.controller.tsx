const models = require('../../models');

async function test(req:any, res:any){
    //Relation One to One
    /*const user = await models.User.findByPk(4,{
        include:[models.Address]
    });
    const address = await models.Address.findByPk(1,{
        include:[models.User]
    });*/

    //Relation One to Many
    /*const user = await models.User.findByPk(4,{
        include:[models.Post]
    });*/
    //Relation Many to Many
    const post = await models.Post.findByPk(20
        ,{
        include:[models.Category]
    });

    const category = await models.Category.findByPk(1
        ,{
        include:[models.Post]
    });
    res.status(200).json({
        data:category
    
    })
}
 

module.exports={
    test:test
}
/*import {Request, Response,NextFunction} from 'express';
import axios,{AxiosResponse} from 'axios';


const testFunction = async (req:Request,res:Response,next:NextFunction)=> {

    let result: AxiosResponse=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.send(result.data);
}
*/