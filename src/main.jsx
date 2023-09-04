/* -----primero lo de react---------------- */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* ------Luego lo de terceros------------- */
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/popper'
import 'animate.css';
import './style.scss'
/*---------- Luego mi codigo-------------- */
import { HeroApp } from "./HeroApp";


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <HeroApp/>
    </BrowserRouter>
  
)
