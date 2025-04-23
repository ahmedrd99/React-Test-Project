import { useState } from "react"

export function RegisterForm(){
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const [displayName , setDisplayName] = useState("");
    return <form>
        <div>
            <label htmlFor="username"> Username:</label>
            <br />
            <br />
        <input 
        id="username"
        value={username}
        onChange={(e)=> { setUsername (e.target.value);

          }} />
        
        </div>
         <br />
        <div>
            <label htmlFor="password" >Password : </label>
            <br />
            <br />
        <input id="password" 
        value={password}
        onChange={(e)=> { setPassword (e.target.value);

        }} />
        
        </div>
         <br />
        <div>
            <label htmlFor="displayName"> Display name : </label> 
            <br />
            <br />
        <input id="displayName"  
        value={displayName}
        onChange={(e)=> { setDisplayName (e.target.value);

        }} />
        
        </div>
    </form>
}