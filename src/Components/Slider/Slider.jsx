import React from "react";
import "../Slider/Slider.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";

const Slider = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Recipies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />

          <SwiperSlide>
            <div className="flexColStart r-card">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="home"
                className="cuisine-image"
              />

              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>200 calories</span>
                {/* <span>200 calories</span> */}
              </span>

              <span className="primaryText">Noodles</span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ut corporis delectus tempore totam eos?
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flexColStart r-card">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="home"
                className="cuisine-image"
              />

              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>200 calories</span>
                {/* <span>200 calories</span> */}
              </span>

              <span className="primaryText">Noodles</span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ut corporis delectus tempore totam eos?
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flexColStart r-card">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="home"
                className="cuisine-image"
              />

              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>200 calories</span>
                {/* <span>200 calories</span> */}
              </span>

              <span className="primaryText">Noodles</span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ut corporis delectus tempore totam eos?
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flexColStart r-card">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="home"
                className="cuisine-image"
              />

              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>200 calories</span>
                {/* <span>200 calories</span> */}
              </span>

              <span className="primaryText">Noodles</span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ut corporis delectus tempore totam eos?
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flexColStart r-card">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="home"
                className="cuisine-image"
              />

              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>200 calories</span>
                {/* <span>200 calories</span> */}
              </span>

              <span className="primaryText">Noodles</span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ut corporis delectus tempore totam eos?
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flexColStart r-card">
              <img
                src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
                alt="home"
                className="cuisine-image"
              />

              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>200 calories</span>
                {/* <span>200 calories</span> */}
              </span>

              <span className="primaryText">Noodles</span>
              <span className="secondaryText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ut corporis delectus tempore totam eos?
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
