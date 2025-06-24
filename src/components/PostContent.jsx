import {PostContentButtons} from "./PostContentButtons";
import { useContext } from "react"; // Import manquant
import { UserContext } from "../utils/Contexts/UserContext";

export function PostContent ({data}) { 
    const userContextData = useContext(UserContext);
    return ( 
        <div>
             
            <PostContentButtons data={data} /> 
             
        </div>
    );
}