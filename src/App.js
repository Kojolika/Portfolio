import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import "./Styles/app.css";
import settingsIcon from './Media/settingsIcon.png';
import settingsIconHover from './Media/settingsIconHover.png';
import Menu from './Components/Modules/ColorThemeMenu';
import { ColorThemeProvider } from './Contexts/ColorThemeContext';

import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Projects from './Components/Pages/Projects';
import Experience from './Components/Pages/Experience';
import ColorTheme from './Components/Atoms/ColorTheme';

function App() {
  //Remove scrolling
  //document.body.style.overflow = "hidden"

  const [isSettingsMenuOn, setSettingsMenu] = useState(false);
  const [settingsIconImage, setSettingsIconImage] = useState(settingsIcon);

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
                <Link to="/experience" className="tabName">Experience</Link>
              </div>

              <span className='seperator'>|</span>

              <div className='tab'>
                <Link to="/projects" className="tabName">Projects</Link>
              </div>

              <span className='seperator'>|</span>

              <div className='tab'>
                <Link to="/contact" className="tabName">Contact</Link>
              </div>
            </ul>
            <div className='settings'>
              <img className='settingsIcon'
                src={settingsIconImage}
                onMouseEnter={() => setSettingsIconImage(settingsIconHover)}
                onMouseLeave={() => setSettingsIconImage(settingsIcon)}
                onClick={() => setSettingsMenu(!isSettingsMenuOn)} />
              {isSettingsMenuOn &&
                <Menu>
                  <ColorTheme></ColorTheme>
                </Menu>}
            </div>
          </div>
          <div className='menuFiller'></div>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/experience' element={< Experience />}></Route>
            <Route exact path='/projects' element={< Projects />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/blog' element={< Blog />}></Route>
          </Routes>
        </div>
      </ColorThemeProvider>
    </Router>
  );
}

export default App;
