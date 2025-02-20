import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productImg1 from "../assets/images/product5.png";
import productImg2 from "../assets/images/product6.png";
import productImg3 from "../assets/images/product7.png";
import productImg4 from "../assets/images/product8.png";
import productImg16 from "../assets/images/product16.png";
import productImg17 from "../assets/images/17.png";
import { TiStarFullOutline } from "react-icons/ti";
import { GrFavorite } from "react-icons/gr";
import { FaEye } from "react-icons/fa";

const productData = [
  {
    id: 1,
    title: "The north coat",
    price: "$260",
    oldPrice: "$360",
    image: productImg1,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    image: productImg2,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler ",
    price: "$160",
    oldPrice: "$170",
    image: productImg3,
  },
  {
    id: 4,
    title: "Small BookSelf",
    price: "$365",
    oldPrice: "$375",
    image: productImg4,
  },
  {
    id: 5,
    title: "Duck-Toy",
    price: "$160",
    oldPrice: "$200",
    image: productImg16,
  },
  {
    id: 6,
    title: "Chiroyli It",
    price: "$170",
    oldPrice: "$210",
    image: productImg17,
  },
];

const BestProducts = () => {
  return (
    <Swiper
      spaceBetween={3}
      slidesPerView={3.2}
      loop={true}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        300: {
          spaceBetween: 3,
          slidesPerView: 1,
        },
        400: {
          spaceBetween: 3,
          slidesPerView: 1,
        },
        500: {
          spaceBetween: 3,
          slidesPerView: 1.8,
        },
        600: {
          spaceBetween: 3.5,
          slidesPerView: 2.1,
        },
        700: {
          spaceBetween: 3.5,
          slidesPerView: 2.3,
        },
        800: {
          spaceBetween: 3.5,
          slidesPerView: 2.5,
        },
        1000: {
          spaceBetween: 3,
          slidesPerView: 3.2,
        },
      }}
    >
      {productData.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="product_card">
            <div className="top">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="bottom">
              <h2 className="product_h2">{product.title}</h2>
              <div className="product_price_box">
                <p className="product_price">{product.price}</p>
                {product.oldPrice && (
                  <>
                    <p className="product_price2">{product.oldPrice}</p>
                    <div className="product_line"></div>
                    <div className="saleProduct_like">
                      <GrFavorite />
                    </div>
                    <div className="saleProduct_eye">
                      <FaEye />
                    </div>
                    <div className="sale_info_box"></div>
                  </>
                )}
              </div>
              <div className="product_star">
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestProducts;
