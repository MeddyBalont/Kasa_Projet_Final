import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Layout/Footer'
import Logement from '../pages/Logement'
import About from '../pages/About'
import Error from '../pages/Error'

function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                {/* Ensure the wildcard route is at the end */}
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AllRoutes
