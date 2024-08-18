import React from "react";
import Left from "../assets/images/left";

const Sidebar = () => {
  return (
    <div className="slideANDswiperBOX">
      <ul className="sidebar-content">
        <li>
          <a href="">Woman’s Fashion</a>
        </li>
        <li>
          <a href="">Men’s Fashion</a>
        </li>
        <li>
          <a href="">Electronics</a>
        </li>
        <li>
          <a href="">Medicine</a>
        </li>
        <li>
          <a href="">Sports & Outdoor</a>
        </li>
        <li>
          <a href="">Baby’s & Toys</a>
        </li>
        <li>
          <a href="">Groceries & Pets</a>
        </li>
        <li>
          <a href="">Health & Beauty</a>
        </li>
        <li>
          <a href="">Home & Lifestyle</a>
        </li>
      </ul>
      <div className="side-line"></div>
      <div className="side-line2"></div>
    </div>
  );
};

export default Sidebar;
