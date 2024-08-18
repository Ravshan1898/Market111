import React from "react";
import Img from "../assets/images/Frame 719.png";
import { GoPaperAirplane } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section exclusive">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <GoPaperAirplane className="fotter_icon" />
          </form>
        </div>
        <div className="footer-section support">
          <h2>Support</h2>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>
            Email: <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          </p>
          <a href="Phone: +88015-88888-9999"> Phone: +88015-88888-9999</a>
        </div>
        <div className="footer-section account">
          <h2>Account</h2>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section download-app">
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>\
          <a href="">
            <img src={Img} alt="" />
          </a>
          <div className="icon_box">
            <a href="">
              <FaFacebookF className="f_icon" />
            </a>
            <a href="">
              <CiTwitter className="f_icon" />
            </a>
            <a href="">
              <FaInstagram className="f_icon" />
            </a>
            <a href="">
              <FaLinkedinIn className="f_icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
