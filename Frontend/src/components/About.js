
import React from 'react';
import about from '../assets/images/about-img.png';

const About = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>About Us</h2>
          <p>
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={about} alt="About" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>We Are Finexo</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
              <p>
                Molestiae odio earum non qui cumque provident voluptates,
                repellendus exercitationem, possimus at iste corrupti officiis
                unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                ab omnis quasi expedita.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
