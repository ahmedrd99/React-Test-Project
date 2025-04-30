

import { useState } from "react";
import { UserProfile } from "./components/UserProfile"; 
import { UserDetails } from "./components/UserDetails";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
/*

export default function App(){ 
  const callMe =() => { console.log("hello");}
        return ( 
        <div>
            <h1> Root Compenent</h1>
            <UserProfile 
            username="AHMED "
            age={25} 
            isLoggedIn={true}
            favoriteFoods={ [[
              {
              name:"sushi",
              id:"sushi",
            },
            {
              name: 'Pizza',
              id:'Pizza'
            },
          ]]
        }
          callMe={callMe}
          />
        </div>
  );
}
*/


/*
export default function App(){
  const mockUsers = [
{ 
  id:1 ,
 username:"ahmed",
 Email: "ahmed824@gmail.com",
},
{
  id:2,
username:"nabil",
Email: "nabil8080@gmail.com",
},
{
  id:3,
username:"nabil",
Email: "nabil8080@gmail.com",
},
{
  id:4,
username:"nabil",
Email: "nabil8080@gmail.com",
}
  ]
   

  
  return (
     <div> 
      <h1> List of users </h1>
      {mockUsers.map((user)=>{
        return ( <UserDetails key={user.id} user={user}/>)
        })}
    
       </div>
 
  );
};
*/

/*

export default function app () {
  const isAuthenticated = true;
  const isVerified = null;
   return ( 
    <div>
    { isAuthenticated? (<div><h1>welcome, User!</h1> </div> )  : 

    (<div><h2> You are not Logged In</h2></div>)} 
    
    { isVerified? (<h1> welcome</h1>) : (<h1> You are not verified , pleas verify ur email </h1>)}

    </div>
  ) ;
     
    }
    */

    // export default function App() { 
    //   window.addEventListener('resize', (e)=>{
    //     console.log(window.innerHeight, window.innerWidth)
    //   })
     
    //   return ( 
    //     <div>
    //         <RegisterForm  /> 
    //     </div>
    //   )
    // }

    export default function App() {
      const [username,setUsername]=useState ("");
      const [email,setEmail]=useState ("");
      const [counter,setCounter]=useState (3);
     
      const [ users, setUsers]= useState([
        {
          id:1,
          username:"anson",
          email:"anson@gmail.com",
        },
        {
          id:2, 
          username:"nike",
          email:"nike@gmail.com",
        }

      ]);
    
      
      return (
      <div>

        <form onSubmit={(e)=>{ e.preventDefault()
          const newUser = {
            id: counter,
            username, 
            email,
          };
          setCounter((currentCounter)=> currentCounter +8);
          setUsers ((currentUserState)=> [...currentUserState, newUser]);// mise à jour du tableau User. 
        }}
        >

        <div>
          <label htmlFor="username">username :</label>
        <input
        name="username" 
        type="text" 
        id="username"
        value={username} 
        onChange= {(e)=> {setUsername(e.target.value)}}/>
        </div>

        <br />


        <div>
        <label htmlFor="email">Email :</label>
        <input name="email" 
        type="email" 
        id="email"
        value={email}
        onChange={ (e) => { setEmail(e.target.value)}} />
        </div>
        <br />
       <button >Add User</button>

        </form>
        <br /> 
      
      {users.map((user)=> (
         <UserDetails key={user.id} user={user} setUsers={setUsers}/>
      ))
      }
      </div>
    )}