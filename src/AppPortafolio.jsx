import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Navbar } from './components/nav/Navbar'
import { Portafolio } from './components/portafolio/Portafolio'
import { Services } from './components/service/Services'
import { Testimonials } from './components/testimonio/Testimonials'

export const AppPortafolio = () => {
  return (
    <div className="app__container">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
