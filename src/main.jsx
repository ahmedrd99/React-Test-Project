import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import{createBrowserRouter,RouterProvider } from 'react-router-dom'
import "./globals.css";
import { UsersPage } from './pages/UsersPage';
import { BlogPostPage } from './pages/BlogPostPage'; 
import { element } from 'prop-types';
 import FooterPage from './pages/FooterPage'; 
const router = createBrowserRouter([
 {  path:"/",
  element:<App/>,
   children: [ 
    { 
      path:"users",
      element:<UsersPage/>
    },
    
   
 ],
 },
 
     {
  path : "footer",
  element: <FooterPage/>
  
 
  
 },
  {
  path : "/blog-posts",
  element: <BlogPostPage/>
  
 },
   
])
ReactDOM.createRoot(document.getElementById("root")).render(
  < React.StrictMode>
  <RouterProvider router={router}/> 
  </React.StrictMode >
);
