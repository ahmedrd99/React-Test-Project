

import { useState, useEffect} from "react";
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
      // const [username,setUsername]=useState ("");
      // const [email,setEmail]=useState ("");
       
     
      //   {
      //     id:1,
      //     username:"anson",
      //     email:"anson@gmail.com",
      //   },
      //   {
      //     id:2, 
      //     username:"nike",
      //     email:"nike@gmail.com",
      //   }

      // ]);
    
      useEffect(() => { 
        console.log('Rendring...')
      document.title = "React Tutorial" + pizza + counter ;

      }, [counter]);
 

        {/* <form onSubmit={(e)=>{ e.preventDefault()
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

        </form> */}
           
      
      {/* {users.map((user)=> (
         <UserDetails key={user.id} user={user} setUsers={setUsers}/>
      ))
      } */}
      }
    



    //simple exercice With useEffect: 
//     import { useState, useEffect } from "react";

// export default function App() {
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     console.log("Tu as tapé :", username);
//   }, [username]);

//   return (
//     <div>
//       <h1>Bienvenue !</h1>
//       <input
//         type="text"
//         placeholder="Tape ton nom"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         style={{ padding: "10px", fontSize: "16px", borderRadius: "6px" }}
//       />
//       <p>Tu as écrit : <strong>{username}</strong></p>
//     </div>
//   );
// }


// example avec UseEffect Pizza 
// import { useState, useEffect } from 'react';

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [pizza, setPizza] = useState("Margherita");
//   const [userInput, setUserInput] = useState(""); // Nouvel état pour l'input

//   useEffect(() => {
//     document.title = `React Tutorial | Pizza: ${pizza} | Compteur: ${counter}`;
//   }, [counter, pizza]);

//   const handleCounterChange = (value) => {
//     setCounter(prev => prev + value);
//   };

//   const handlePizzaChange = (newPizza) => {
//     setPizza(newPizza);
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h2>Menu Personnalisé</h2>
      
//       <div style={{ margin: '15px 0' }}>
//         <p>Compteur actuel: <strong>{counter}</strong></p>
//         <button onClick={() => handleCounterChange(1)} style={buttonStyle}>+1</button>
//         <button onClick={() => handleCounterChange(3)} style={buttonStyle}>+3</button>
//         <button onClick={() => handleCounterChange(-1)} style={buttonStyle}>-1</button>
//         <input
//           type="number"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           placeholder="Entrez un nombre"
//           style={{ margin: '0 10px', padding: '5px' }}
//         />
//         <button 
//           onClick={() => handleCounterChange(Number(userInput))} 
//           style={buttonStyle}
//         >
//           Appliquer
//         </button>
//       </div>

//       <div style={{ margin: '15px 0' }}>
//         <p>Pizza actuelle: <strong>{pizza}</strong></p>
//         <select 
//           value={pizza} 
//           onChange={(e) => handlePizzaChange(e.target.value)}
//           style={{ padding: '5px' }}
//         >
//           <option value="Margherita">Margherita</option>
//           <option value="4 Fromages">4 Fromages</option>
//           <option value="Pepperoni">Pepperoni</option>
//           <option value="Custom">Personnalisée</option>
//         </select>
//       </div>

//       {pizza === "Custom" && (
//         <input
//           type="text"
//           placeholder="Nommez votre pizza"
//           onChange={(e) => setPizza(e.target.value)}
//           style={{ padding: '5px', marginTop: '10px' }}
//         />
//       )}
//     </div>
//   );
// }

// const buttonStyle = {
//   padding: '5px 10px',
//   margin: '0 5px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer'
// };