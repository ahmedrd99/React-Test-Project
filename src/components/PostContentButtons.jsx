import { UserContext } from "../utils/Contexts/UserContext";
import { PostContent } from "./PostContent";
import { useContext } from "react"; // Ajout crucial
 

export function PostContentButtons ({data}) { 
  const {id,setUserData} = useContext( UserContext);// On récupère les données
    return ( 
    
        <div>
            <div>
                <span>PostContentButtons</span>
            </div>
            {id}
            <br />
            <button onClick={()=> {
                setUserData((currentState)=> ({...currentState,
                     displayName: 'updated Display Name'}))
            }}> Click Me</button>
         
        </div>
    );
}