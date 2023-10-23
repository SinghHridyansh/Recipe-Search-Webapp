import React from "react";
import "../ContactUs/ContactUs.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const ContactCard = (cdata) => {
  return (
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">{cdata.icon}</div>
        <div className="flexColStart detail">
          <span className="primaryText">{cdata.title}</span>
          <span className="secondaryText">{cdata.number}</span>
        </div>
      </div>
      <div className="flexCenter button">{cdata.BtText}</div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">It's so easy to Contact Us</span>
          <span className="secondaryText">
            Always ready to help, offering the best services for a better life.
            We hold the conviction that a superior living environment can
            significantly enrich your well-being
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <ContactCard
                icon={<MdCall size={25} />}
                title="Call"
                number="012 345 678 9"
                BtText="Call Now"
              />
              <ContactCard
                icon={<BsFillChatDotsFill size={25} />}
                title="Chat"
                number="012 345 678 9"
                BtText="Chat Now"
              />
            </div>
            <div className="flexStart row">
              <ContactCard
                icon={<HiChatBubbleBottomCenter size={25} />}
                title="Text"
                number="012 345 678 9"
                BtText="Text Now"
              />
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/delish-210419-carne-asada-torta-01-portrait-jg-1620136948.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
