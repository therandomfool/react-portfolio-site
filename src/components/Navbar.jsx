import React from "react";
import logo from "../logo.png";

const Navbar = () => {
  


  return (
    <nav className='navbar navbar-fix navbar-expand-lg navbar-light border-bottom'>
      <div className='container-fluid'>
        <a className='navbar-brand text-white' href='home'>
          <img className='logo ' src={logo} alt='' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto '>
            <li className='nav-item active'>
              <a className='nav-link text-white' href='home'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-white' href='home'>
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
