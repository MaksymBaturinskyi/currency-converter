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
                <label>
                    {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                </label>
            </div>
        </header>
    );
};

export default Header;
