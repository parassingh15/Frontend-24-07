import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingTop.css";
export default function LandingTop() {


  let navigate = useNavigate();
  const showSettings=()=>{

    

    if(document.getElementById('options').className === "options"){
    document.getElementById('options').classList.add('optionsHidden');
    document.getElementById('options').classList.remove('options');
    }
    else{
    document.getElementById('options').classList.remove('optionsHidden');
    document.getElementById('options').classList.add('options');
    
  }
  }
  return (
    <div className="LandingTop">
      <div className="details">
        <div className="User" id="User"  onClick={() => showSettings()}>
          <h5>
            <i className="LandingIcon fa-solid fa-user"></i>
            Welcome, Paras Singh
            <i className=" LandingIconDown fa-solid fa-caret-down"></i>
          </h5>
        </div>
        <div className="optionsHidden" id="options">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Settings <i className=" optionsIcons fa-solid fa-gear"></i></li>
            <li className="list-group-item">Profile <i className=" optionsIcons  fa-solid fa-user"></i></li>
            
            <li className="list-group-item " onClick={()=> navigate('/')} >Log Out <i className=" optionsIcons  fa-solid fa-arrow-right-from-bracket"></i></li>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
}

