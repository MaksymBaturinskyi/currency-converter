import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "../pages/Header";
import AllCurrencies from "../pages/AllCurrencies";
import MyCurrencies from "../pages/MyCurrencies";

const AppRouter = () => {

    return (
        <Router className='container'>
            <Header />
            <Routes>
                <Route path="/" element={<AllCurrencies />} />
                <Route path="/my-currencies" element={<MyCurrencies />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
