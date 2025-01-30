import React from 'react';//import react library to work with jsx and react features
import ReactDOM from 'react-dom/client';//import reactdom for rendering react components to the dom
import App from './App';//import the app component (the root component of the application)
import './index.css';//import gloabl css style for the app
//function creates a root node for rendering the react app in the root element 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
