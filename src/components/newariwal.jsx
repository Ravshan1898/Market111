import React from "react";

const CardLayout = () => {
  return (
    <div className="card-container">
      <div className="card card1">
        <div className="card-content">
          <h2>PlayStation 5</h2>
          <h3>Black and White version of the PS5 coming out on sale.</h3>
          <a href="">Shop Now</a>
        </div>
      </div>
      <div className="side-cards">
        <div className="card card2">
          <div className="card-content">
            <h2>Women’s Collections</h2>
            <h3>Featured woman collections that give you another vibe.</h3>
            <a href="">Shop Now</a>
          </div>
        </div>
        <div className="small-cards">
          <div className="card card3">
            <div className="card-content">
              <h2>Speakers</h2>
              <h3>Amazon wireless speakers</h3>
              <a href="">Shop Now</a>
            </div>
          </div>
          <div className="card card4">
            <div className="card-content">
              <h2>Perfume</h2>
              <h3>GUCCI INTENSE OUD EDP</h3>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
