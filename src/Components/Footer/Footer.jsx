import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <span className="secondaryText">
            Our vision is to make search food
            <br />a literal childsplay.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">32/4C, XX XxX, New Delhi</span>

          <div className="flexCenter f-menu">
            <span>Home</span>
            <span>Search</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
