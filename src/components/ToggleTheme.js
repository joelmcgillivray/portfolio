import React from 'react';

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
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ToggleTheme;