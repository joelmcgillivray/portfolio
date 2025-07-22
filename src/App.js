import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import SettingsModal from './components/SettingsModal';

const storageKey = 'theme-preference';

function App() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem(storageKey);
    return stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  const darkMode = theme === 'dark';
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Router>
      <div className={`d-flex flex-column min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <MyNavbar
          darkMode={darkMode}
          theme={theme}
          setTheme={setTheme}
          onSettingsClick={() => setShowSettings(true)}
        />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
        <SettingsModal
          show={showSettings}
          handleClose={() => setShowSettings(false)}
          darkMode={darkMode}
          setTheme={setTheme}
        />
      </div>
    </Router>
  );
}

export default App;