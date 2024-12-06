import React from 'react'
import team1 from '../assets/images/team-1.jpg'; 
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';


const Team = () => {
    const teamMembers = [
      { img: team1, name: 'Joseph Brown', role: 'Marketing Head' },
      { img: team2, name: 'Nancy White', role: 'Marketing Head' },
      { img: team3, name: 'Earl Martinez', role: 'Marketing Head' },
      { img: team4, name: 'Josephine Allard', role: 'Marketing Head' }
    ];
  
    return (
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>Our Team</h2>
          </div>
          <div className="team_container row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="box">
                  <div className="img-box">
                    <img src={member.img} className="img1" alt={member.name} />
                  </div>
                  <div className="detail-box">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                  <div className="social_box">
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Team;