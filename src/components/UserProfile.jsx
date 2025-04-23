import { UserFavoriteFoods } from "./UserfavoriteFoods";
import {UserUsername} from "./UserUsername";
import PropTypes from "prop-types";
import React from "react";
export   function UserProfile(props){
    console.log(props.age);
   props.callMe();
    
    return( 
    <>
   
    <b>Age:</b>
    <span>{props.age}</span> 
     
      <>
     <UserUsername username={props.username}/>
    <UserFavoriteFoods/> 
             
        </>
        </>
        
    );
};
UserProfile.propTypes = { 
    username:  PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    UserFavoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
  };
 