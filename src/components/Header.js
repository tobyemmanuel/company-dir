import React from 'react'
import logo from '../img/logo.png';

export default function Header() {
  return (
    <div>
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <a href="#home" className="logo d-flex align-items-center me-auto me-lg-0">
        <img src={logo} alt="logo"/>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#directory">Directory</a></li>
        </ul>
      </nav>

      <a className="btn-contact" href="Contact">Contact</a>
      <i className="nav-toggle nav-show bi bi-list"></i>
      <i className="nav-toggle nav-hide d-none bi bi-x"></i>
    </div>
  </header> 
    </div>
  )
}
