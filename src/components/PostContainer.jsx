import { useContext, useState } from "react";
import {PostContent} from "./PostContent";
import { UserContext } from "../utils/Contexts/UserContext";


export function PostContainer () { 
      const [data, setData] = useState(" hello Ahmed ! ");
     const userContextData = useContext(UserContext) ;

    // console.log(userContextData.setUserData);


    return ( 
        <div>
          
            <PostContent data = {data} /> 
            <div>{userContextData.id}</div>
            <div>{userContextData.name}</div>
            <div>{userContextData.username}</div>
            <div>{userContextData.email}</div>
            <PostContent data={data}/>
        </div>
    );
}