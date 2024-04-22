import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Footer from './components/Footer'

const App = () => (

    <div className='flex flex-col w-[90%] max-w-[1200px]'>
        <BrowserRouter>
            <Navbar />
            <div className='flex flex-col items-center gap-[100px]'>
                <Routes>
                    <Route index element={<Home />} />
                    <Route element={<Articles />} path='/articles' />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>

    </div>
)

export default App
