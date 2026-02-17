import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
            <footer style={{ padding: '20px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.6 }}>
                &copy; {new Date().getFullYear()} J&G Tulip Atelier. Все права защищены.
            </footer>
        </div>
    )
}

export default App
