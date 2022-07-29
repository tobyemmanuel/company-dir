import React from 'react'

export default function AboutSection() {
  return (
    <div>
      <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Learn more About Us</h2>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4 position-relative about-img" data-aos="fade-up" data-aos-delay="150">
          </div>
          <div className="col-lg-8 d-flex align-items-center" data-aos="fade-up" data-aos-delay="150">
            <div className="about-content ps-0 ps-lg-5">
              <h1>About <span>Us</span></h1>
              <p>
                CompanyDir can make life incredibly easier for you.
                Find companies nearby with their addresses and other details about them using our product.
                Our Product is:
              </p>
              <div className="row gy-4">
                <div className="col-lg-12 d-flex align-items-center">
                  <div className="row gy-4">
      
                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-star"></i>
                        <h4>Accurate</h4>
                      </div>
                    </div>
      
                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-phone"></i>
                        <h4>Mobile-friendly</h4>
                      </div>
                    </div>


                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-emoji-smile"></i>
                        <h4>User-friendly</h4>
                      </div>
                    </div>
      
                    <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-currency-dollar"></i>
                        <h4>Free to use</h4>
                      </div>
                    </div>
      
                  </div>
                </div>
      
              </div>
    
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}
