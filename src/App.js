import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useState } from 'react';

import "./Styles/app.css";
import settingsIcon from './Media/settingsIcon.png';
import settingsIconHover from './Media/settingsIconHover.png';
import ColorThemeMenu from './Components/Modules/ColorThemeMenu';
import { ColorThemeProvider } from './Contexts/ColorThemeContext';

import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Projects from './Components/Pages/Projects';
import ColorTheme from './Components/Atoms/ColorTheme';
import DesignTestCube from './Components/Atoms/DesignTestCube';

import github from './Media/GitHub_logo.png';
import linkedIn from './Media/Linkedin-logo.png';

function App() {

  const [isSettingsMenuOn, setSettingsMenu] = useState(false);
  const [settingsIconImage, setSettingsIconImage] = useState(settingsIcon);

  const openSettingsMenu = (oldIcon) => {
    (oldIcon === settingsIcon) ? setSettingsIconImage(settingsIconHover) : setSettingsIconImage(settingsIcon);
    setSettingsMenu(!isSettingsMenuOn);
  };


  //Creates the background animation
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const cubeCount = 100;
  const designCubes = [];

  const offsetFromTop = 60;
  const waveHeight = 10;
  const waveLength = 10; //inverse relationship
  const animSpeed = 50;   //inverse relationship
  const totalLineHeight = 150;

  for (var i = 1; i <= cubeCount; i++) {
    designCubes.push(i);
  }

  const cubes = designCubes.map((index) =>
    <DesignTestCube
      key={index}
      top={(Math.sin(10 + (index / cubeCount) * waveLength) * waveHeight) + offsetFromTop + "%"}
      left={((index / cubeCount)) * totalLineHeight + -50 + "%"}
      animDur={index / cubeCount + animSpeed + "s"}

    >
    </DesignTestCube>

  );
  //////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Router>
      <ColorThemeProvider>
        <div className='app'>
          <div className='menuTabs'>
            <ul className='tabs'>
              <div className='tab'>
                <Link to="/" className="tabName">Home</Link>
              </div>

              <span className='seperator'>|</span>

              <div className='tab'>
                <Link to="/projects" className="tabName">Personal Projects</Link>
              </div>

              <span className='seperator'>|</span>

              <div className='tab'>
                <Link to="/contact" className="tabName">Contact</Link>
              </div>
            </ul>
            <div className='links'>
              <a href="https://github.com/Kojolika">
                <img id="githubLogo" src={github} />
              </a>
              <a href="https://www.linkedin.com/in/andrew-myshok-55106822a/">
                <img id="linkedInLogo" src={linkedIn} />
              </a >
            </div>
            <div className='settings'>
              <img className='settingsIcon'
                src={settingsIconImage}
                onClick={() => openSettingsMenu(settingsIconImage)} />
              {isSettingsMenuOn &&
                <ColorThemeMenu>
                  <ColorTheme></ColorTheme>
                </ColorThemeMenu>}
            </div>
          </div>
          {/* <div className='menuFiller'></div> */}
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/projects' element={< Projects />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/blog' element={< Blog />}></Route>
          </Routes>
          <ul id='designTestContainer'>
            {cubes}
          </ul>
        </div>
      </ColorThemeProvider>
    </Router>
  );
}

export default App;
