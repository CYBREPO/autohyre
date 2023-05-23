import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SinglecarCategory from "../Pages/singlecar-category";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SinglecarCategory" element={<SinglecarCategory />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Router




