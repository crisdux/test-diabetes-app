import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Data from './components/Data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="max-w-6xl mx-auto p-4 sm:p-8 font-sans">
        <nav className="mb-8 relative">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Diabetes Info</h1>
            <button
              className="md:hidden text-blue-600 focus:outline-none z-20"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <ul className={`md:flex md:space-x-4 absolute md:static left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-full opacity-100 visible' : 'top-[-490px] md:opacity-100 md:visible opacity-0 invisible'} z-10`}>
            <li>
              <Link to="/" className="block py-2 px-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 md:hover:bg-transparent" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/data" className="block py-2 px-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 md:hover:bg-transparent" onClick={() => setIsMenuOpen(false)}>Data</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;