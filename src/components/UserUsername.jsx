import React from "react";
import styles from "./users.module.scss" ;
export function UserUsername( props){

    console.log(props.username)
    return (
           <> 
           <b className={styles.foodsTitle} >Username: </b>
            <span>{props.username}</span>
           </>
        );
       
}