import { useState } from "react"

export function RegisterForm(){
    const [usernamen , setUsername]=useState("");
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
            <label htmlFor="password" >Password: </label>
            <br />
            <br />
        <input id="password" type="text" />
        
        </div>
         <br />
        <div>
            <label htmlFor="displayName"> Display name: </label> 
            <br />
            <br />
        <input id="displayName" type="text" />
        
        </div>
    </form>
}