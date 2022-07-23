import React from 'react'
import './NavbarTop.css'
import { Outlet, Link } from "react-router-dom";

export default function NavbarTop() {
  return (
    <div className='NavbarTop'>
        <div className='NavIcon Homebtn'>
        <h4><Link to="/home" style={{textDecoration: "none", color: "white" }}><i className='navTop-icon fa-solid fa-house-chimney'></i> Home</Link></h4>
        </div>
        <div className=' NavIcon NavbarSearch'>
        <h4><Link to="/search" style={{textDecoration: "none", color: "white" }}><i className='navTop-icon fa-solid fa-magnifying-glass'></i> Search</Link></h4>
        </div>
        <div className=' NavIcon NavbarLibrary'>
        <h4><Link to="/library" style={{textDecoration: "none", color: "white" }}><i className='navTop-icon fa-solid fa-swatchbook'></i> Library</Link></h4>
        </div>
        <Outlet />
    </div>
  )
}