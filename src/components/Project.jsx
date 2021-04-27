import React from "react";
import Brushr from "../assets/Brushr.png";
import campFree from "../assets/campfree.png";
import Reserve from "../assets/reservationT.png";
import GBoy from "../assets/gamebone.gif"
import Mandle from "../assets/mandlebrot.png"
import Tree from "../assets/tree.gif"
import Hover from "../assets/3d.gif"
import Clock from "../assets/clocktok.gif"
import Email from "../assets/email.gif"
import Port from "../assets/port.gif"
import Icon from "../assets/icon.gif"
import Tabs from "../assets/tabs.gif"
import Empire from "../assets/empire.gif"

import { FaGithubAlt } from "react-icons/fa";


const Project = () => {
  return (
    <div className='container'>
      <div className='top container-fluid' >
        <div className="mNp">
          <h1>JAVA</h1>
          <div className='card-deck row mt-3'>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="http://18.224.85.94:8080/BruShr/"><img src={Brushr} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Brushr Homebrewer Site</h5>
                <ul >
                  <li>Online microbrew repository</li>
                  <li>MySql database / Project DBA</li>
                  <li>MVC Design w/ Spring Boot</li>
                  <li>Java > JavaScript > Bootstrap > MySql</li>
                </ul>
                <p className='card-bottom text-white'>

                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/MidtermProject">
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="http://18.224.85.94:8080/CampFree"><img src={campFree} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>CampFree</h5>
                <ul>
                  <li>Directory for dispersed camping sites</li>
                  <li>Project Lead role</li>
                  <li>MVC Design w/ Spring Boot</li>
                  <li>Java > JavaScript > Angular > MySql</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/FinalProject">
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="http://18.224.85.94:8080/ReservationTracker"><img src={Reserve} className='card-img-top' alt='...' /></a>
              <div className='card-body'>
                <h5 className='card-title'>Restaurant Reservation App</h5>
                <ul>
                  <li>Simulating a reservation system</li>
                  <li>Full CRUD</li>
                  <li>Spring Data JPA Entities</li>
                  <li>Java > JavaScript > Angular > MySql</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/EventTrackerProject" >
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='top container-fluid '>
        <div className="mNp">
          <h1>JAVASCRIPT / REACT</h1>
          <div className='card-deck row mt-3'>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/team-final-client"><img src={Empire} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Project & Team Tracker</h5>
                <ul>
                  <li>Dashboard for viewing Teams and Projects</li>
                  <li>Full CRUD implementation PostgreSql DB</li>
                  <li>Spring Data JPA Entities</li>
                  <li>Java > JavaScript > React > PostSql</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool/team-final-client'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/Icon-Background-Animation-CSS"><img src={Icon} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Icon Background</h5>
                <ul>
                  <li>Background using font-awesome icons</li>
                  <li>Random Icons moving in lines</li>
                  <li>Gold light with tail on cursor move </li>
                  <li>CSS > JavaScript </li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool/Icon-Background-Animation-CSS'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a href="https://github.com/therandomfool/react-portfolio-site"><img src={Port} className='card-img-top' alt='...' /></a>
              
              <div className='card-body'>
                <h5 className='card-title'>React Personal Portfolio</h5>
                <ul>
                  <li>Personal Portfolio</li>
                  <li>Full size scrolling background image</li>
                  <li>Use of React Icons</li>
                  <li>CSS > JavaScript > React > Bootstrap</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer"
                    href='https://github.com/therandomfool/react-portfolio-site'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='top container-fluid '>
        <div className="mNp">
          <h1>P5.JS</h1>
          <div className='card-deck row mt-3'>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://upbeat-gates-700f92.netlify.app/"><img src={GBoy} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Tetris Handheld</h5>
                <ul>
                  <li>Fashioned after handheld console</li>
                  <li>Playing basic Tetris</li>
                  
                  <li> JavaScript > P5.JS</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool/Gameboy-Tetris-P5.JS'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/Mandlebrot-Set-With-P5.JS-Grayscale"><img src={Mandle} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Mandlebrot Set Grayscale</h5>
                <ul>
                  <li>Mathematical Visualization of Mandlebrot set</li>
                  <li>Use of Greyscal coloring</li>
                  <li> JavaScript > P5.JS</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool/Mandlebrot-Set-With-P5.JS-Grayscale'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/3D-Recursive-Trees-P5.JS"><img src={Tree} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>3D Recursive Trees</h5>
                <ul>
                  <li>Recursive function calls to build 3d trees</li>
                  <li>New tree built every 10 calls</li>
                  
                  <li> JavaScript > P5.JS</li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/3D-Recursive-Trees-P5.JS">
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='top container-fluid '>
        <div className="mNp">
          <h1>CSS</h1>
          <div className='card-deck row mt-3'>
            <div className='card border-white '>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/image-Hoover-Effects-3D-CSS"><img src={Hover} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>3D image hover</h5>
                <ul>
                  
                  <li>CSS > JavaScript </li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/image-Hoover-Effects-3D-CSS">
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/CSS-Glassmorphism-Clock"><img src={Clock} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Glassmorphism Clock</h5>
                <ul>
                  
                  <li>CSS > JavaScript </li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/CSS-Glassmorphism-Clock">
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/Subscribe-To-Newsletter-Button-CSS"><img src={Email} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Subscribe Button Animation</h5>
                <ul>
                  
                  <li>CSS > JavaScript </li>
                </ul>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href="https://github.com/therandomfool/Subscribe-To-Newsletter-Button-CSS">
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
