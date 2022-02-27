import React from 'react';
import logo from '../assets/logo/randm.png';

const Navbar = ({ brand }) => {



  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container justify-content-center">
        <a href="/">
          <img class="logo-main" src={logo} alt="rick and morty" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
