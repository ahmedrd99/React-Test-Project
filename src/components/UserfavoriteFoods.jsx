import { createElement } from "react";
import styles from "./users.module.scss";
export function UserFavoriteFoods() {
    return createElement (
        "section",
         null,  
    
         
         <div>
            <span className={styles.foodsTitle}> favorite Foods:</span>
            <br />
            

            <ul> 
                <li> Suchi </li>
                <li>Pizza</li>
                <li>Tacose</li>
            </ul>
         </div>
        
        

    );
}
