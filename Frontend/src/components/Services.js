
import React from 'react';
import service1 from '../assets/images/s1.png';
import service2 from '../assets/images/s2.png';
import service3 from '../assets/images/s3.png';

const Services = () => {
    const services = [
      { icon: service1, title: 'Currency Wallet', description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using' },
      { icon: service2, title: 'Security Storage', description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using' },
      { icon: service3, title: 'Expert Support', description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using' }
    ];
  
    return (
      <section className="service_section layout_padding">
        <div className="service_container container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="#">View All</a>
          </div>
        </div>
      </section>
    );
  };

  export default Services;
  