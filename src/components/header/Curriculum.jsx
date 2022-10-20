import React from 'react'

import cv from '@/assets/cv.pdf'

export const Curriculum = () => {
  return (
    <div className="curriculum__container">
      <a href={cv} className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hablemos!
      </a>
    </div>
  )
}
