import React from 'react'
import logo from '../img/logo.png';
export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-1">
            <div className="col-lg-4 col-md-6 footer-about">
              <img className="footer-logo" src={logo} alt="logo" />
              <div>
                <p>
                  Get accurate information about companies nearby.
                </p>
                <p>
                  &copy; Copyright <strong>CompanyDir</strong>. All Rights Reserved
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-nav d-flex">
                <span><a href="home">Home</a></span>
                <span><a href="about">About</a></span>
                <span><a href="directory">Directory</a></span>
            </div>

            <div className="col-lg-4 col-md-6 contact-footer d-flex">
              <div>
                <h4>Contact</h4>
                <p>
                  Do you need more information? Reach out to us on:
                </p>
                <p>
                  <strong>Email:</strong> info@companydir.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
