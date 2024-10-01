
export interface User{
    id:number,
    name:string
}

const users:User[]=[
    {   id:1,name:'Marvin Guillen'    },
    {   id:2 ,name:'Hector Sabillon'   },
    {   id:3 ,name:'Diany Barahona'   },
     
]


export const getUser=(id:number):User|undefined =>{
    console.log('Function of get user with value '+id.toString());
        return users.find((user)=>user.id===id)
}