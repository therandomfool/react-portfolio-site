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
import Game from "../assets/gamemachine.gif"
import Icon from "../assets/icon.gif"
import Tabs from "../assets/tabs.gif"

import { FaGithubAlt } from "react-icons/fa";


const Project = () => {
  return (
    <>
      <div className='top container-fluid' >
        <div className="mNp">
          <h1>JAVA</h1>
          <div className='card-deck row mt-3'>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="http://18.224.85.94:8080/BruShr/"><img src={Brushr} className='card-img-top' alt='...' /></a>

              <div className='card-body'>
                <h5 className='card-title'>Brushr Homebrewer Site</h5>
                <ul>
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
                  <a className='text-white'  target="_blank" rel="noreferrer" href="https://github.com/therandomfool/FinalProject">
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
                  <a className='text-white' target="_blank" rel="noreferrer"  href="https://github.com/therandomfool/EventTrackerProject" >
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
            <a target="_blank" rel="noreferrer" href="https://amazing-snyder-723a73.netlify.app/"><img src={Game} className='card-img-top' alt='...' /></a>
              
              <div className='card-body'>
                <h5 className='card-title'>Game Machine</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
              </p>
                <p className='card-bottom text-white'>
                <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool/Game-Machine'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <a target="_blank" rel="noreferrer" href="https://github.com/therandomfool/Icon-Background-Animation-CSS"><img src={Icon} className='card-img-top' alt='...' /></a>
              
              <div className='card-body'>
                <h5 className='card-title'>Icon Background</h5>
                <p className='card-text'>
                  This card has supporting text below as a natural lead-in to
                  additional content.
              </p>
                <p className='card-bottom text-white'>
                  <a className='text-white' target="_blank" rel="noreferrer" href='https://github.com/therandomfool/Icon-Background-Animation-CSS'>
                    <FaGithubAlt />
                  </a>
                </p>
              </div>
            </div>
            <div className='card border-white'>
              <img src={Tabs} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>React Personal Portfolio</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer content
                  than the first to show that equal height action.
              </p>
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
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
              </p>
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
                <p className='card-text'>
                  This card has supporting text below as a natural lead-in to
                  additional content.
              </p>
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
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer content
                  than the first to show that equal height action.
              </p>
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
                <p className='card-text'>
                  3D cards with 360 rotation.  Image is visable from back and front, with text placement on the back.
              </p>
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
                <p className='card-text'>
                  This card has supporting text below as a natural lead-in to
                  additional content.
              </p>
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
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer content
                  than the first to show that equal height action.
              </p>
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
    </>
  );
};

export default Project;
