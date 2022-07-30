import React from 'react'
import heroImage from '../img/hero-image.png';

export default function HeroSection() {
  return (
    <div>
    <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-between gy-3">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Are you looking for companies within your locality?</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            CompanyDir lets you do that with ease without missing your way.
          </p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#map-section" className="btn-get-started">Get Started</a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-lg-start text-center ">
          <img src={heroImage} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"/>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}
