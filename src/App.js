import './style/Navbar.css';
import './style/About.css';
import './style/App.css';
import './style/Project.css';
import './style/Behave.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import Project from './components/Project';
import Navbar from './components/Navbar';
import About from './components/About';
import Behave from './components/Behave';

function App() {
  return (
    <>
    <Navbar />,
    <About />,
    <Behave />,
    <Project />
    </>
  );
}

export default App;
