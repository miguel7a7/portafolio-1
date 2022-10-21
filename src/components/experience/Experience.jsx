import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

import './exprerience.css'

export const Experience = () => {
  return (
    <section id="experience" className="experience__primary">
      <h5>Mis Habilidades</h5>
      <h2>Mis Conocimientos</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="experience__title">Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>HTML</h4>
                <small className="text-muted">Alta</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>CSS</h4>
                <small className="text-muted">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>JavaScript</h4>
                <small className="text-muted">Alta</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>Bootstrap</h4>
                <small className="text-muted">Alta</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>Tailwind</h4>
                <small className="text-muted">Intermedia</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>React</h4>
                <small className="text-muted">Alta</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3 className="experience__title">Desarrollo Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>Node Js</h4>
                <small className="text-muted">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>MongoDB</h4>
                <small className="text-muted">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>PHP</h4>
                <small className="text-muted">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>Mysql</h4>
                <small className="text-muted">Intermedio</small>
              </div>{' '}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details" />
              <div className="experience__details-content">
                <h4>Python</h4>
                <small className="text-muted">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
