import { useState } from "react";

export function RegisterForm(){
    // const [username , setUsername]=useState("");
    // const [password , setPassword]=useState("");
    // const [displayName , setDisplayName]=useState("");
    
    // const isDisabled =  !username || !password || !displayName; // Désactivé si un champ est vide

    //Gestion des champs de formulaire avec un seul state (formFields)
    const [formFields ,setFormFields]=useState({
        username:'',
        password:'',
        displayName:''
    });
    console.log(formFields);
    return <form onSubmit={(e)=>{ e.preventDefault();}}> 
        <div>
            <label htmlFor="username"> Username:</label>
            <br />
            <br />
        <input 
        id="username"
        value={formFields.username} // important for binding with state
       // onChange={(e)=> { setFormFields (e.target.value);// also this important for binding  }} 
       onChange={
        (e)=>{
         setFormFields((currentState) => 
        ({ ...currentState , // React te donne le VRAI état actuel
            username: e.target.value,
        }))
        }
        }
         
         />
        
        </div>
         <br />
        <div>
            <label htmlFor="password" >Password : </label>
            <br />
            <br />
        <input 
        id="password" 
        value={formFields.password}
        //onChange={(e)=> { setPassword (e.target.value);}}
        onChange={(e)=>{ setFormFields((formFields) => 
            ({ ...formFields , // React te donne le VRAI état actuel
                password: e.target.value,
            }))}}
          />
        
        </div>
         <br />
        <div>
            <label htmlFor="displayName"> Display name : </label> 
            <br />
            <br />
        <input 
        id="displayName"  
        value={formFields.displayName}
       // onChange={(e)=> { setDisplayName (e.target.value);}}
       onChange={(e)=>{
        setFormFields((currentState) => 
            ({ ...currentState , // React te donne le VRAI état actuel
                displayName: e.target.value,
            }))
       }}
        />
        
        </div>
        <br />
        <div>
            <span>
                username: {formFields.username}
            </span>
            <br />
            <br />
            <span> password : <span></span>
                 
                 <span style={{
                    color: 'transparent',
                    textShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
                    fontFamily: 'monospace'
                    }}>
                    {formFields.password}
                </span>  
            </span>
            <br />
            <br />
            <span> display name : {formFields.displayName} </span>
           
            
        </div>
        <br />
        {
        /* <button   
         disabled={isDisabled} 
       style={{
        backgroundColor: isDisabled ? "white" : "green",
        padding: "10px",
        cursor: isDisabled ? "not-allowed" : "pointer"
      }}
      >Sing Up
      </button> */
      }
    </form>
}