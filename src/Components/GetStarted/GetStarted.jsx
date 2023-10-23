import React from "react";
import "../GetStarted/GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With RecipeBook</span>
          <span className="secondaryText">
            Subscribe and find super delicious recipes
            <br />
            to fit your needs and please your tastebuds.
          </span>
          <button className="button">
            <a href="mailto:work.hridyansh@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
