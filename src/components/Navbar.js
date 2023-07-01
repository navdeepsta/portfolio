import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="#"><span className="narbar-brand-logo">N</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page" href="#">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/projects" class="nav-link" href="#">Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link" href="#">Contact</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Badges</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  
  )
}
