import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Preloader />
            <Navbar />
            <Hero />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App