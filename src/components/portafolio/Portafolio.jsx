import React from 'react'

import './portafolio.css'
import IMG1 from '@/assets/portfolio1.jpg'
import IMG2 from '@/assets/portfolio2.jpg'
import IMG3 from '@/assets/portfolio3.jpg'
import IMG4 from '@/assets/portfolio4.jpg'
import IMG5 from '@/assets/portfolio5.png'
import IMG6 from '@/assets/portfolio6.jpg'

export const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>Mis Trabajos Recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        <article className="portafolio__item">
          <div className="portafolio__item-img">
            <img src={IMG1} alt="img-portafolio" />
          </div>

          <h3>this is a portafolio item title</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-img">
            <img src={IMG2} alt="img-portafolio" />
          </div>

          <h3>this is a portafolio item title</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-img">
            <img src={IMG3} alt="img-portafolio" />
          </div>

          <h3>this is a portafolio item title</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-img">
            <img src={IMG4} alt="img-portafolio" />
          </div>

          <h3>this is a portafolio item title</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-img">
            <img src={IMG5} alt="img-portafolio" />
          </div>

          <h3>this is a portafolio item title</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-img">
            <img src={IMG6} alt="img-portafolio" />
          </div>

          <h3>this is a portafolio item title</h3>
          <div className="portafolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
