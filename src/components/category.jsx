import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { TbDeviceImac } from "react-icons/tb";
import { BsSmartwatch } from "react-icons/bs";  
import { TiCameraOutline } from "react-icons/ti";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";


const category = () => {
  return (
    <div className="container">
      <div className="category_cards">
        <div className="category_card">
          <IoIosPhonePortrait className="category_icons" />
          <p className="category_p">Phone</p>
        </div>
        <div className="category_card">
          <TbDeviceImac className="category_icons" />
          <p className="category_p">Computers</p>
        </div>
        <div className="category_card">
          <BsSmartwatch className="category_icons" />
          <p className="category_p">SmartWatch</p>
        </div>
        <div className="category_card">
          <TiCameraOutline className="category_icons" />
          <p className="category_p">Camera</p>
        </div>
        <div className="category_card">
          <CiHeadphones className="category_icons" />
          <p className="category_p">HeadPhones</p>
        </div>
        <div className="category_card">
          <TbDeviceGamepad className="category_icons" />
          <p className="category_p">Gaming</p>
          
        </div>
      </div>
    </div>
  );
};

export default category;
