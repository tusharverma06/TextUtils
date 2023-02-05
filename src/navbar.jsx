import React from "react";
import {
    Link
  } from "react-router-dom";
export default function ExampleNav(props){
    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand ${props.mode==='dark'? 'text-light': 'text-dark'}`} to="/">{props.title}</Link>
    
    <div id="navbarNav" style={{width: '200px'}}>
      <ul className="navItems">
        <li className="nav-item">
          <Link className={`nav-link active ${props.mode==='dark'? 'text-light': 'text-dark'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.mode==='dark'? 'text-light': 'text-dark'}`} to="/about">About</Link>
        </li>
      
      </ul>
      
    </div>
   

  </div>
</nav>
    )
}
