import React, { useState } from 'react'

import './navbar.css'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

export const Navbar = () => {
  const [navActive, setNavActive] = useState('#')

  const sectionClick = (enlaceActivo) => {
    setNavActive(enlaceActivo)
  }

  return (
    <nav>
      <a
        href="#"
        onClick={() => sectionClick('#')}
        className={`${navActive === '#' ? 'active' : ''}`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => sectionClick('about')}
        className={`${navActive === 'about' ? 'active' : ''}`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => sectionClick('experience')}
        className={`${navActive === 'experience' ? 'active' : ''}`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => sectionClick('services')}
        className={`${navActive === 'services' ? 'active' : ''}`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => sectionClick('contact')}
        className={`${navActive === 'contact' ? 'active' : ''}`}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}
