import React from 'react'
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
  
);
