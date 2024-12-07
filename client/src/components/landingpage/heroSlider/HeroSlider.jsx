import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";

import { sliderData } from "../../../assests/data/slider";
import "./HeroSlider.css";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section><div className="complete-slider">
      <Container>
      
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider-wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider-content w-50 ps-2">
                  <h2 className="mb-3 ">{item.title}</h2>
                  <p>{item.desc}</p>
                  {/* <button className="btn">Explore Food</button> */}
                </div>
              <div className="imagebox">
                <div className="slider-img w-50">
                <img src={item.imgUrl} alt="" height="450" width="650" style={{ position: 'right' }} />
                </div></div>
              </div>
            </div>
          ))}
        </Slider>
        
      </Container></div>
    </section>
  );
};

export default HeroSlider;
