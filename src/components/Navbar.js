import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="narbar-brand-logo">NS</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="NavLink" aria-current="page" href="#">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="NavLink" href="#">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="NavLink" href="#">Contact</NavLink>
              </li>
              <li className="nav-item">
                <a  className="NavLink" href="https://www.credly.com/users/navdeep-singh.313489d9/badges" target="_blank">Badges</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  
  )
}
