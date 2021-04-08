import './style/Navbar.css';
import './style/About.css';
import './style/App.css';
import './style/Project.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project from './components/Project';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar />,
    <About />,
    <Project />
    </>
  );
}

export default App;
