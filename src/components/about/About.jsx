import React from 'react'

import './about.css'

import imgUser from '@/assets/foto-user.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">
      <h5>Llegar a saber</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__img">
          <div className="about__img-content">
            <img src={imgUser} alt="imagen user" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon-card" />
              <h5>Expriencia</h5>
              <small>3+ años trabajando</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon-card" />
              <h5>Clientes</h5>
              <small>20+ en Bolivia</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon-card" />
              <h5>Proyectos</h5>
              <small>80+ completados</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tenetur, aliquam veritatis nihil voluptates incidunt iusto ullam
            voluptatem repudiandae. Odit asperiores consectetur commodi ullam
            sint voluptatem dignissimos impedit quidem sequi.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos!!!
          </a>
        </div>
      </div>
    </section>
  )
}
