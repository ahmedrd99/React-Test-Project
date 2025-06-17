import { useEffect } from "react";

export   function useDocumentClick () {

    console.log('useDocumentClick');
    
    const handleDocumentClick = (e)=>{
        console.log("Clicked Document");
    };
    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);

        };

    },[]);
 }