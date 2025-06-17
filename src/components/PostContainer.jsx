import { useContext, useState } from "react";
import {PostContent} from "./PostContent";
import { UserContext } from "../utils/Contexts/UserContext";


export function PostContainer () { 
      const [data, setdata] = useState(" hello Ahmed ! ");
     const userContextData = useContext(UserContext) ;

    console.log(userContextData.setUserData);


    return ( 
        <div>
          <div>
            <span>PostCont</span>
          </div>
            <PostContent data = {data} /> 
            <div>{userContextData.displayName}</div>
        </div>
    );
}