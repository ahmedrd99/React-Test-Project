import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import React from "react";
 import ReactDOM from "react-dom/client";
import App from './App';
import "./globals.css";
    
  

ReactDOM.createRoot(document.getElementById("root")).render(
  < React.StrictMode>
<div>  <App/></div>
  </React.StrictMode >
);
