import React from 'react';
import lightIcon from '../assets/light.svg';
import darkIcon from '../assets/dark.svg';

const ToggleTheme = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme-preference', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
  <button
    id="theme-toggle"
    onClick={toggleTheme}
    aria-label={theme}
    className="btn btn-outline-secondary border-0 d-flex align-items-center gap-2"
    style={{ borderRadius: '999px', fontWeight: 500 }}
  >
    <img
      src={theme === 'dark' ? darkIcon : lightIcon}
      alt={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      style={{ width: '20px', height: '20px' }}
    />
  </button>
);
};

export default ToggleTheme;