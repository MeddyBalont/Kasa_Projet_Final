import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Layout/Footer'
import Logement from '../pages/Logement'

function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AllRoutes
