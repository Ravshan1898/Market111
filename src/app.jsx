import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import SaleProducts from "./components/saleproducts";
import Category from "./components/category";
import BestProducts from "./components/BestProducts";
import Banner from "./components/banner";
import OurProduct1 from "./components/ourproduct1";
import OurProduct2 from "./components/ourproduct2";
import NewAriwal from "./components/newariwal";
import Fotter from "./components/fotter";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sidebarANDswiperBOX">
          <Sidebar />
          <Content />
        </div>
      </div>
      <section className="FlashSales">
        <div className="container">
          <div className="subtitle_cube_box">
            <div className="cube"></div>
            <h3 className="subtitle">Today’s</h3>
          </div>
          <h2 className="title">Flash Sales</h2>
          <SaleProducts />
          <div className="ViewAll_btn">
            <a href="/">View All Products</a>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="Line_3"></div>
      </div>
      <section className="Category">
        <div className="container">
          <div className="subtitle_cube_box">
            <div className="cube"></div>
            <h3 className="subtitle">Categories</h3>
          </div>
          <h2 className="title">Browse By Category</h2>
        </div>
        <Category />
      </section>
      <div className="container">
        <div className="Line_3"></div>
      </div>
      <section className="BestSellingProducts">
        <div className="container">
          <div className="subtitle_cube_box">
            <div className="cube"></div>
            <h3 className="subtitle">This Month</h3>
          </div>
          <div className="BestProduct_minibox">
            <h2 className="title">Best Selling Products</h2>
            <div className="Best_Product_btn">
              <a href="">View All</a>
            </div>
          </div>
          <BestProducts />
        </div>
      </section>
      <section className="Banner">
        <div className="container">
          <div className="banner_box">
            <Banner />
          </div>
        </div>
      </section>
      <section className="OurProducts">
        <div className="container">
          <div className="subtitle_cube_box">
            <div className="cube"></div>
            <h3 className="subtitle">Our Products</h3>
          </div>
          <h2 className="title">Explore Our Products</h2>
          <OurProduct1 />
          <OurProduct2 />
          <div className="ViewAll_btn">
            <a href="/">View All Products</a>
          </div>
        </div>
      </section>
      <section className="New_Arrival">
        <div className="container">
          <div className="subtitle_cube_box">
            <div className="cube"></div>
            <h3 className="subtitle">New Arrival</h3>
          </div>
          <h2 className="title">New Arrival</h2>
          <NewAriwal />
        </div>
      </section>
      <section className="Info">
        <div className="container">
          <div className="info_box">
            <div className="info_card">
              <div className="info_icon">
                <TbTruckDelivery />
              </div>
              <h2>FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <TfiHeadphoneAlt />
              </div>
              <h2>24/7 CUSTOMER SERVICE</h2>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="info_card">
              <div className="info_icon">
                <IoShieldCheckmarkSharp />
              </div>
              <h2>MONEY BACK GUARANTEE</h2>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Footer">
        <Fotter />  
      </section>
    </>
  );
}

export default App;
