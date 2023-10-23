import React from "react";
import "../Companies/Companies.css";
import Company1 from "../Companies/prologis.png";
import Company2 from "../Companies/tower.png";
import Company3 from "../Companies/equinix.png";
import Company4 from "../Companies/realty.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={Company1} alt="" />
        <img src={Company2} alt="" />
        <img src={Company3} alt="" />
        <img src={Company4} alt="" />
      </div>
    </section>
  );
};

export default Companies;
