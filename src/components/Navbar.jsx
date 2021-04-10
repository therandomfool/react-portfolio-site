import React from "react";
import logo from "../logo.png";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  


  return (
    <nav className='navbar navbar-fix navbar-expand-lg navbar-light border-bottom'>
      <div className='container-fluid'>
        <a className='navbar-brand text-white' href='home'>
          <img className='logo ' src={logo} alt='' />
        </a>
        
      </div>
      <MdEmail className='text-white mr-2' size={49} />
      <a className='text-white' href="mailto:michaeldegginger@protonmail.com">michaeldegginger@protonmail.com</a>
    </nav>
  );
};

export default Navbar;
