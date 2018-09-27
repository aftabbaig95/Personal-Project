import React, { Component } from 'react'; 
import {Link} from "react-router-dom";

export default class Header extends Component {
  constructor () { 
    super(); 
  }
  
  render() {
    return (
      <div> 
        <header className="App-header">
          <Link to={"/home"} >
          <img src="https://static1.squarespace.com/static/58ac9aba9f7456c8497eb3b6/t/58beebc96a4963902965e1d9/1490639795601/?format=1500w" className="App-logo" alt="logo" /> 
          </Link>
          
          <input type="text" placeholder="Have you been to Dallas..." className="search"  ></input> 
          <div className="navbar">
              <button className="nav-button">Become a Host</button>
              <button className="nav-button">Sign Up</button>
              <a href="http://localhost:3001/logout"> <button className="nav-button" >Logout </button> </a>
          </div>
        </header>
      </div>
    )
  }
}
