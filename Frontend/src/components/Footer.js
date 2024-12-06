import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="#">Location</a>
                  <a href="#">Call +01 1234567890</a>
                  <a href="#">demo@gmail.com</a>
                </div>
                <div className="info_social">
                  <a href="#">Social Link</a>
                  <a href="#">Social Link</a>
                  <a href="#">Social Link</a>
                  <a href="#">Social Link</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a href="index.html" className="active">Home</a>
                  <a href="about.html">About</a>
                  <a href="service.html">Services</a>
                  <a href="why.html">Why Us</a>
                  <a href="team.html">Team</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Subscribe</h4>
              <p>Subscribe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          © <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By <a href="https://html.design/">Free Html Templates</a>
        </div>
      </section>
    </>
  );
};

export default Footer;