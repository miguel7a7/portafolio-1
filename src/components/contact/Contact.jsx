import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import './contact.css'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jl4y23t',
        'template_rwa1tqk',
        form.current,
        'GGHIUnDjCDW8-yXrY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }
  return (
    <section id="contact" className="contact__contenedor">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>webmaick@gmail.com</h5>
            <a
              href="mailto:webmaick@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Webmaick</h5>
            <a href="https://m.me/miguel7_a7" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+591-68166974</h5>
            <a
              href="https://api.whatsapp.com/send?phone=69776354"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              required
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email"
              required
              autoComplete="off"
            />
          </div>

          <div className="form-control">
            <textarea
              name="message"
              rows="7"
              placeholder="Tu Mensaje"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
