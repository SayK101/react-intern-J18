import React from "react";
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {

    const navSty = {
        color: 'white'
    };

    return (
      <nav>
          <ul className="nav-links">
              <Link style={navSty} to='/'>
                <li>Home</li>        
              </Link>
              <Link style={navSty} to='/contact'>
                <li>Contact</li>
              </Link>             
          </ul>
      </nav>
      
    );
  }
  
  export default Nav;