import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import "./Styles/app.css";
import settingsIcon from './Media/settingsIcon.png';

import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Projects from './Components/Pages/Projects';
import Experience from './Components/Pages/Experience';

function App() {
  //Remove scrolling
  //document.body.style.overflow = "hidden"

  return (
    <Router>
      <div className='app'>
        <div className='menuTabs'>
          <ul className='tabs'>
            <span className='tab'>
              <Link to="/" className="tabName"><a>Home</a></Link>
            </span>

            <span className='seperator'>|</span>

            <span className='tab'>
              <Link to="/experience" className="tabName"><a>Experience</a></Link>
            </span>

            <span className='seperator'>|</span>

            <span className='tab'>
              <Link to="/projects" className="tabName"><a>Projects</a></Link>
            </span>

            <span className='seperator'>|</span>

            <span className='tab'>
              <Link to="/contact" className="tabName"><a>Contact</a></Link>
            </span>

            <span className='seperator'>|</span>

            <span className='tab'>
              <Link to="/blog" className="tabName"><a>Blog</a></Link>
            </span>
          </ul>
          <div className='settings'>
            <img className='settingsIcon' src={settingsIcon}/>
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

    </Router>
  );
}

export default App;
