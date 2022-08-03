import React from "react";
import "./NavbarTop.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function NavbarTop() {
  let navigate = useNavigate();
  return (
    <div className="NavbarTop">
      <div className="NavIcon Homebtn">
        <h4 onClick={() => navigate("/")}>
          
            <i className="navTop-icon fa-solid fa-house-chimney"></i> Home
          
        </h4>
      </div>
      <div className=" NavIcon NavbarSearch">
        <h4 onClick={() => navigate("/search")}>
          
            <i className="navTop-icon fa-solid fa-magnifying-glass"></i> Search
          
        </h4>
      </div>
      <div className=" NavIcon NavbarLibrary">
        <h4 onClick={() => navigate("/library")}>
          
            <i className="navTop-icon fa-solid fa-swatchbook"></i> Library
          
        </h4>
      </div>
      <Outlet />
    </div>
  );
}
