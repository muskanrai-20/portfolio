
import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Preloader />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App