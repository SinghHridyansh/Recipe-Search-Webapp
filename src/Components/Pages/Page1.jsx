import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Pages/Pages.css";
import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";
import Companies from "../Companies/Companies";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import GetStarted from "../GetStarted/GetStarted";
import ContactUs from "../ContactUs/ContactUs";

const Page1 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <div className="Page1">
            <div className="Hero">
              <div className="Hero-heading">
                <h1>
                  The <span style={{ color: "#f0b858" }}>best</span> place to
                  look for new recipies.
                </h1>
                <span style={{ fontSize: "17px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, nulla. Et blanditiis hic alias consequuntur nemo
                  itaque nobis corporis mollitia?
                </span>

                <button>
                  <Link to="/page2">Get Started</Link>
                </button>
              </div>
              <div className="flexColEnd Hero-block">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="https://www.diversivore.com/wp-content/uploads/2018/08/Universal-Chinese-Green-Cooking-Methods-Stir-Frying-square.jpg"
                alt=""
              />
            </div>
          </div>
          <Companies />
          <Slider />
          <ContactUs />
          <GetStarted />
          <Footer />
        </>
      )}
    </>
  );
};

export default Page1;
