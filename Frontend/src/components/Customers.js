import React from "react";
import c1 from "../assets/images/client1.jpg";
import c2 from "../assets/images/client2.jpg";

const CustomerSection = () => {
  const customers = [
    {
      img: c1,
      name: "LusDen",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
    {
      img: c2,
      name: "Zen Court",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
    },
  ];

  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>What says our Customers</h2>
        </div>
        <div className="row">
          {customers.map((customer, index) => (
            <div key={index} className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img
                    src={customer.img}
                    className="box-img"
                    alt={customer.name}
                  />
                </div>
                <div className="detail-box">
                  <div className="client_id">
                    <div className="client_info">
                      <h6>{customer.name}</h6>
                      <p>magna aliqua. Ut</p>
                    </div>
                  </div>
                  <p>{customer.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
