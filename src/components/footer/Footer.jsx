import React from 'react'

import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Webmaick
      </a>

      <ul>
        <li className="footer__links">
          <a href="#">Inicio</a>
          <a href="#about">Sobre Mi</a>
          <a href="#exprerience">Experiencias</a>
          <a href="#services">Servicios</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contactos</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com">
          <FaFacebook />
        </a>
        <a href="http://instagram.com">
          <FiInstagram />
        </a>
        <a href="http://twiter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; WebMaick Portafolio, derechos reservados</small>
      </div>
    </footer>
  )
}
