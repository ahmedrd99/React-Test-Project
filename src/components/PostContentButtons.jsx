import { UserContext } from "../utils/Contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext } from "react"; // Ajout crucial
 

export function PostContentButtons ({data}) { 
  const {id,setUserData} = useContext( UserContext);// On récupère les données
    return ( 
    
        <div>
             
            {id}
            <br />
            <button onClick={()=> {
                setUserData((currentState)=> ({...currentState,
                     name: 'updated Display Name'}))
            }}> Click Me</button>
         
        </div>
    );
}