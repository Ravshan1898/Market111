import React from "react";
import BannerImg from "../assets/images/BannerImg.png";

const banner = () => {
  return (
    <>
      <div className="left_div">
        <h3 className="left_div_h3">Categories</h3>
        <h2>Enhance Your Music Experience</h2>
        <div className="banner_balls">
          <div className="banner_ball">
            <p>23</p>
            <p className="p2">Hours</p>
          </div>
          <div className="banner_ball">
            <p>05</p>
            <p className="p2">Days</p>
          </div>
          <div className="banner_ball">
            <p>59</p>
            <p className="p2">Minutes</p>
          </div>
          <div className="banner_ball">
            <p>35</p>
            <p className="p2">Secondes</p>
          </div>
        </div>
        <div className="banner_btn">
          <a href="/">Buy Now</a>
        </div>
      </div>
      <img src={BannerImg} alt="" />
    </>
  );
};

export default banner;
