/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBook } from "react-icons/io5";

import MD from "../assets/md-portrait.jpg";

const About = () => {
  return (
    <div className='top container-fluid'>
      <div className='row'>
        <div className='aboutMe col-7 mx-5 mt-5'>
          <h3>Michael Degginger's Story <span>so far...</span></h3>
          <img src={MD} alt=""/>
          <p id='readOpac'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est ab placeat reprehenderit molestiae harum, ad accusantium, consectetur, ipsa velit illo vitae odit dolorum? Placeat ipsa repellendus molestiae totam reiciendis.
          Eveniet a consequuntur dolor, eius ipsum aliquid tempora qui voluptatum nostrum repudiandae sapiente magni doloremque. Quo expedita excepturi, vero quam delectus voluptatum minus, ratione, consequatur exercitationem numquam fugit blanditiis? Quam!
          Debitis, at voluptatem? Commodi possimus nam sit quaerat dicta nobis velit facere, quae corrupti voluptatem? Natus quisquam quis vel reprehenderit expedita et, hic fugit? Quae nobis officia nemo expedita maiores.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et est ab placeat reprehenderit molestiae harum, ad accusantium, consectetur, ipsa velit illo vitae odit dolorum? Placeat ipsa repellendus molestiae totam reiciendis.
          Eveniet a consequuntur dolor, eius ipsum aliquid tempora qui voluptatum nostrum repudiandae sapiente magni doloremque. Quo expedita excepturi, vero quam delectus voluptatum minus, ratione, consequatur exercitationem numquam fugit blanditiis? Quam!
          Debitis, at voluptatem? Commodi possimus nam sit quaerat dicta nobis velit facere, quae corrupti voluptatem? Natus quisquam quis vel reprehenderit expedita et, hic fugit? Quae nobis officia nemo expedita maiores.
         </p> 
        </div>
        <div className="col-1"></div>
        <div className='col-2 btn-group-vertical btn-link mt-5'>
          <button className='rounded border border-white btn btn-outline-light  text-white'>
            <a href='https://github.com/therandomfool' alt="github"></a>
            <FaGithubAlt size={29} />
          </button>
          <button className=' rounded border border-white btn btn-outline-light text-white'>
            <a
              href='https://www.linkedin.com/in/michael-degginger-a00b581ab/'
              alt='linkedin'></a>
            <FaLinkedin size={29} />
          </button>
          <button className=' rounded border border-white btn btn-outline-light text-white'>
            <a href='mailto:michaeldegginger@protonmail.com' alt='email'></a>
            <MdEmail size={29} />
          </button>
          <button className='rounded border border-white btn btn-outline-light text-white'>
            <a href='mailto:michaeldegginger@protonmail.com' alt='email'></a>
            <IoBook size={29} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
