import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../pages/404';
import Home from '../pages/home';
import 'flowbite';
import TestePage from '../pages/devteste';
const RoutesJota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" index element={<Home />} />
                <Route exact path="/formpage" index element={<TestePage />} />
                <Route exact path="*" element={<NotFound />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesJota;