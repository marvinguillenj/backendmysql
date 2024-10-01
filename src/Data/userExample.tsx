

export interface User{
    id:number,
    name_user:string
}

const userexamplearray:User[]=[
    {   id:1,name_user:'Marvin Guillen'    },
    {   id:2 ,name_user:'Hector Sabillon'   },
    {   id:3 ,name_user:'Diany Barahona'   },
     
]


export const getUser=(id:number):User|undefined =>{
        return userexamplearray.find((user)=>user.id===id)
}