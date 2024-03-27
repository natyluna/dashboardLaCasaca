import { useState,useEffect } from 'react/cjs/react.development';
import { getUsers } from '../service/users.service';


const useUser = ()=>{

    const [users,setUsers]= useState({countUs:0,usuarios:[]});
    useEffect(() => {
        async function fetchData(){
          const result = await getUsers();
          console.log(result);
          setUsers(result)
        }
        fetchData();
     },[])
     return {countUs:users.CONTADOR,usuarios:users.USUARIOS}
}

export {useUser};

