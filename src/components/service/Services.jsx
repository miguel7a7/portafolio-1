import React from 'react'

import './services.css'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <section id="services">
      <h5>Lo que te Ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service__article">
          <div className="service__head">
            <h3 className="text-center">UI/UX Diseño</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
          </ul>
        </article>
        <article className="service__article">
          <div className="service__head">
            <h3 className="text-center">Desarrollo Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
          </ul>
        </article>
        <article className="service__article">
          <div className="service__head">
            <h3 className="text-center">Creación de Contenido</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, quam.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
