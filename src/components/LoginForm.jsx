import { useState } from 'react';

export function LoginForm() {
    // 1. Déclarez le state avec useState
  const [username, setUsername] = useState('');
    return ( 
    <form onSubmit= {(e) => {
        e.preventDefault(); // Empêche la page de se recharger
        const formData = new FormData(e.target);//(e.target) ici cible le form lui-méme 
        console.log(formData.get( )); 
     }}
     > 
        <label htmlFor="username"
         style={{cursor:"Pointer",
            fontSize:"32px"
        }}>Username:</label>
        <br />
        <br />
<input id='username' value={username}
 onChange={(e) => { setUsername(e.target.value);
     console.log(e.target.value ) ;
 
}}  name="username" style={{padding:"10px", borderRadius:"6px", 
boxShadow:"initial",width:"300px"}}/>
<br />
<br />
<label htmlFor="Email" style={{cursor:"Pointer",
            fontSize:"32px"
        }}>Your Email:</label>
        <br />
        <br />
<input id='Email' name="Email" type="email" style={{padding:"10px", borderRadius:"6px", boxShadow:"initial", width:"300px"}}/>
<br />
<br />
<label htmlFor="Pasword" style={{cursor:"Pointer",
            fontSize:"32px"
        }} >Password:</label>
        <br />
        <br />
<input id='Password' name="password" type="password"
 onChange={(e)=> {console.log("lettre:",e.target.value);}} 
style={{padding:"10px", borderRadius:"6px", boxShadow:"initial", width:"300px"}}/>
<br />
<br />
<button  onClick={(e) =>{console.log( "buttoncliquer")} }
style={{display:"block", padding:"10px",width:"100px",   fontWeight: "bold" , fontSize:"20px", cursor:"pointer"}}>
    Login </button>
    
    </form>
);
}