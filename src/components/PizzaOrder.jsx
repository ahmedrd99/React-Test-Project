import { useState,useEffect } from "react";

    function  PizzaOrder() {
  
      const [counter, setCounter] = useState(0);
      const [pizza, setPizza] = useState("Margherita");
      const [selectedPizzaType, setSelectedPizzaType] = useState("Margherita");
      const [customPizzaName, setCustomPizzaName] = useState("");
      const [userInput, setUserInput] = useState("");
    
      useEffect(() => {
        document.title = `React Tutorial | Pizza: ${pizza} | Compteur: ${counter}`;
      }, [counter, pizza]);
    
      const handlePizzaChange = (newType) => {
        setSelectedPizzaType(newType);
        if (newType !== "Custom") {
          setPizza(newType);
        } else {
          setPizza(customPizzaName || "Custom");
        }
      };
    
      return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
           
    
          <div style={{ margin: '15px 0' }}>
            <p>Pizza actuelle: <strong>{pizza}</strong></p>
            <select 
              value={selectedPizzaType}
              onChange={(e) => handlePizzaChange(e.target.value)} //
              style={{ padding: '5px' }}
            >
              <option value="Margherita">Margherita</option>
              <option value="4 Fromages">4 Fromages</option>
              <option value="Pepperoni">Pepperoni</option>
              <option value="Custom">Personnalisée</option>
            </select>
            
          </div>
    
          {selectedPizzaType === "Custom" && (
            <input
              type="text"
              value={customPizzaName}
              placeholder="Nommez votre pizza"
              onChange={(e) => {
                setCustomPizzaName(e.target.value);
                setPizza(e.target.value);
              }}
              style={{ padding: '5px', marginTop: '10px' }}
            />
          )}
        </div>
      );
 

}