import React from "react";
import {
    Link
  } from "react-router-dom";
  import DarkMode from './darkmode.png'
;
export default function ExampleNav(props){
    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid" >
    <Link className={`navbar-brand ${props.mode==='dark'? 'text-light': 'text-dark'}`} to="/"><h1>{props.title}</h1></Link>

    <div className="" id="navbarNav" >
      <ul className="navItems" style={{width: '200px'}}>
        <li className="nav-item">
          <Link className={`nav-link active ${props.mode==='dark'? 'text-light': 'text-dark'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${props.mode==='dark'? 'text-light': 'text-dark'}`} to="/about">About</Link>
        </li>
      
      </ul>
      
    </div>
   

  </div>
  <div className="modeSwitch">
<div className="form-check form-switch mx-3" onClick={props.toggleMode}>
  {props.mode==='light'?   <img src="https://cdn2.iconfinder.com/data/icons/user-interface-vol-2-14/48/brightness-light-up-day-mode-512.png" alt="" width={'30px'} />
:<img src={DarkMode} alt='' width={'30px'}/>
}

</div>
</div>   
</nav>
    )
}
