import React from 'react'
import { HeaderSocials } from './HeaderSocials'

import './header.css'
import { Curriculum } from './Curriculum'
import user from '@/assets/maick-red.png'

export const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hola yo soy</h5>
        <h1>Miguel Angel Cayo</h1>
        <h5>FullStack Developer</h5>

        <Curriculum />
        <HeaderSocials />

        <div className="header__img">
          <img src={user} alt="user" loading="lazy" />
        </div>

        <a href="#contact" className="header__scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}
