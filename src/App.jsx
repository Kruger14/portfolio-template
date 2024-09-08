import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Profilecard from './Profilecard';
import About from './pages/About';
import Contactme from './pages/Contactme';
import Works from './pages/Works';
import Resume from './pages/Resume';
import { useContext } from 'react';
import { ThemeContext } from './context';
function App() {

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <BrowserRouter>
        <div id='mainone'>
          <h1>Portfolio by Kruger14</h1>
          <p className="footer">Design insired from  <a href='https://bostami-bootstrap-nextjs.vercel.app/#demo'>bostami-bootstrap-nextjs</a></p>
          <div id='toggle' onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </div>
        <div id='layout'>
          <div id='aside-container'>
            <Profilecard />
          </div>
          <div id='navbar-container'>
            <div id='navbar'>
              <Navbar />
            </div>
            <div id='pages'>
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='/contact' element={<Contactme />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/works' element={<Works />} />
              </Routes>
            </div>
          </div>
        </div >
      </BrowserRouter>

    </>
  );
}

export default App;