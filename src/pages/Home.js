import React from 'react'
import { Navbar, Hero, About, Footer, CtaOne, CtaTwo, Contact } from '../components/index'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <CtaOne />
        <About />
        <CtaTwo />
        <Contact />
        <Footer />
    </>
  )
}

export default Home
