import   PropTypes from "prop-types";
import { useState } from "react";


export function UserDetails({user}) {
    const  [isEditing,setIsEditing]=useState(false);
console.log(user);
console.log(isEditing);

const[userInfo,setUserInfo]=useState({
    username: user.username,
    email: user.email
});

    return (
   <div>
     <div>
        <b>ID:</b> 
        <span>{user.id}</span>
        <br />
        <b>Username:</b> 
         {isEditing? (
            
            <input 
            name="username"
            id="username"
            type="text"
            value={userInfo.username}
            onChange={(e)=> setUserInfo({...userInfo,username:e.target.value})} 
            />
        ) : <span>{userInfo.username}</span>}
        <br />
        <b>Email:</b> 
        {isEditing? (
            
            <input 
            type="text"
            value={userInfo.email}
            onChange={(e)=> setUserInfo({...userInfo,email: e.target.value})} 
            />
        ) : <span>{userInfo.email}</span>}
  

    </div>
    <div>
        <button 
    onClick={()=> { 
        setIsEditing((currentState)=> !currentState);
    }} > 
        {isEditing?"Save": "Edit"} 
        
        </button>
        <button onClick={() => alert("User deleted")}>DELETE</button>
    </div>
   </div>
   
    );
}


UserDetails.propTypes ={
    user: PropTypes.shape({
        id:PropTypes.number.isRequired,
        username:PropTypes.string.isRequired,
        email:PropTypes.string.isRequired,
        
    }).isRequired,
    setUsers:PropTypes.func.isRequired, 
}




//version corrigé.
/*
import React, { useState } from "react";

export function UserDetails({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(user.email); // on stocke l'email

  return (
    <div>
      <div>
        <b>ID:</b> <span>{user.id}</span> <br />
        <b>Username:</b> <span>{user.username}</span> <br />
        <b>Email:</b>
        {isEditing ? (
          // Si on est en mode édition ➔ afficher input
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          // Sinon ➔ afficher normalement l'email
          <span>{email}</span>
        )}
      </div>

      <div>
        <button
          onClick={() => {
            setIsEditing((current) => !current);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button>Delete</button>
      </div>
    </div>
  );
}


*/