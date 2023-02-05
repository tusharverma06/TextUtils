import React from "react";
import {
    Link
  } from "react-router-dom";
export default function ExampleNav(props){
    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand ${props.mode==='dark'? 'text-light': 'text-dark'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
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