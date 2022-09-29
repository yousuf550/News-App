import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg bg-primary ">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="/">News App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item"><a className="nav-link text-white" href="/">About</a>  </li>   
           <li className="nav-item"><a className="nav-link text-white" href="/">business</a></li>
           <li className="nav-item"><a className="nav-link text-white" href="/">entertainment</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/"> general</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/"> health</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/"> science</a></li>
           <li className="nav-item"><a className="nav-link text-white" href="/">sports</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="/"> technology</a></li>
        </ul>
      
      </div>
    </div>
  </nav>
    )
  }
}

export default NavBar