const models = require('../../models');

async function test(req:any, res:any){
    const user = await models.User.findByPk(4,{
        include:[models.Address]
    });
    const address = await models.Address.findByPk(1,{
        include:[models.User]
    });
    res.status(200).json({
        data:address
    
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