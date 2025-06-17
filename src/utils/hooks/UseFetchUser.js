import { useEffect, useState } from "react";
  
const userApiUrl="https://jsonplaceholder.typicode.com/users";
export function useFetchUser(userId){ 
   const[ userData, setUserData]=useState({})
   
    useEffect(()=> { 
        fetch (`${userApiUrl}/${userId}`)
        .then ((response)=> response.json())
        .then((data )=>  setUserData(data))
        .catch((err) => {
          console.log(err)

        });
    },[userId]);
    return userData ;
    console.log(userData)
}
