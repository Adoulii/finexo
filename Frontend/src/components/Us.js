import React from 'react';

import reason1 from '../assets/images/w1.png'; 
import reason2 from '../assets/images/w2.png';
import reason3 from '../assets/images/w3.png';
import reason4 from '../assets/images/w4.png';

const WhyChooseUs = () => {
    const reasons = [
      { icon: reason1, title: 'Expert Management', description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam!' },
      { icon: reason2, title: 'Secure Investment', description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam!' },
      { icon: reason3, title: 'Instant Trading', description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam!' },
      { icon: reason4, title: 'Happy Customers', description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam!' }
    ];
  
    return (
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Choose Us</h2>
          </div>
          <div className="why_container">
            {reasons.map((reason, index) => (
              <div key={index} className="box">
                <div className="img-box">
                  <img src={reason.icon} alt={reason.title} />
                </div>
                <div className="detail-box">
                  <h5>{reason.title}</h5>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="#">Read More</a>
          </div>
        </div>
      </section>
    );
  };

  export default WhyChooseUs;
  