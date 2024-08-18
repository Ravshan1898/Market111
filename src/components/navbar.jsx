import React, { useState } from "react";
import Like from "../assets/images/like";
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <nav>
          <a className="logo" href="/">
            Exclusive
          </a>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contacts">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/sign-up">Sign Up</a>
            </li>
          </ul>
          <div className="nav-elements">
            <div className="search-form">
              <input type="text" placeholder="What are you looking for?" />
              <IoSearchOutline className="nav_icon" />
            </div>
            <MdFavoriteBorder  className="nav_svg" />
            <SlBasket className="nav_svg" />
            <div className="burger" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </nav>
      </div>
      <div className="line-bottom"></div>
    </>
  );
};

export default Navbar;
