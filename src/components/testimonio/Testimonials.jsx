import React from 'react'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './testimonials.css'
import avatar1 from '@/assets/avatar1.jpg'
import avatar2 from '@/assets/avatar2.jpg'
import avatar3 from '@/assets/avatar3.jpg'
import avatar4 from '@/assets/avatar4.jpg'

export const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials__contain">
      <h5>Testimonios de los Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper
        className="container testmonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="cliente__avatar">
            <img src={avatar1} alt="cliente avatar" />
          </div>
          <h5 className="cliente__name">Celia Campos</h5>
          <small className="cliente__detalle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quia similique reprehenderit exercitationem nulla, sapiente
            provident vel? Nisi omnis eos molestias soluta numquam, earum illo
            quisquam repellendus corrupti ad voluptatum.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="cliente__avatar">
            <img src={avatar2} alt="cliente avatar" />
          </div>
          <h5 className="cliente__name">Celia Campos</h5>
          <small className="cliente__detalle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quia similique reprehenderit exercitationem nulla, sapiente
            provident vel? Nisi omnis eos molestias soluta numquam, earum illo
            quisquam repellendus corrupti ad voluptatum.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="cliente__avatar">
            <img src={avatar3} alt="cliente avatar" />
          </div>
          <h5 className="cliente__name">Celia Campos</h5>
          <small className="cliente__detalle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quia similique reprehenderit exercitationem nulla, sapiente
            provident vel? Nisi omnis eos molestias soluta numquam, earum illo
            quisquam repellendus corrupti ad voluptatum.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="cliente__avatar">
            <img src={avatar4} alt="cliente avatar" />
          </div>
          <h5 className="cliente__name">Celia Campos</h5>
          <small className="cliente__detalle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            quia similique reprehenderit exercitationem nulla, sapiente
            provident vel? Nisi omnis eos molestias soluta numquam, earum illo
            quisquam repellendus corrupti ad voluptatum.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
