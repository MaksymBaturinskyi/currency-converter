import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "../pages/Header";

const AppRouter = () => {

    return (
        <Router>
            <Header />
        </Router>
    );
};

export default AppRouter;
