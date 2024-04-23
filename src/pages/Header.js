import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/header.scss';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <nav className="nav">
                <Link className="nav-link" to="/">All Currencies</Link>
                <Link className="nav-link" to="/my-currencies">My Currencies</Link>
            </nav>
            <div className="theme-switcher">
                <label htmlFor="toggle" className="theme-toggler settings-option" id="theme-toggler">
                    {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
                    <input type="checkbox" id="toggle" className="theme-toggler__checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                    <span aria-hidden="true" className="theme-toggler__switch"></span>
                </label>
            </div>
        </header>
    );
};

export default Header;
