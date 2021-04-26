import React from "react";
import logo from "../logo.png";


const Navbar = () => {
  


  return (
    <nav className='navbar navbar-fix navbar-expand-lg '>
      <div className='container-fluid d-flex justify-content-center'>
        <a className='navbar-brand text-white ' href='home'>
          <img className='logo ' src={logo } alt='' />
        </a>
        
      </div>
  
    </nav>
  );
};

export default Navbar;
