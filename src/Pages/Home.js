import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SLIDE1 from "../assets/Slide/slide1.jpeg";
import SLIDE2 from "../assets/Slide/slide2.jpeg";
import testIMG from "../assets/TestImage/IMG_6972.jpg";
import React from 'react';
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    arrows: false,
  };

  return (
    <div>
      <div className="w-full overflow-hidden">
        <Slider settings={settings}>
          <div>
            <img src={SLIDE1} alt="slide" />
          </div>
          <div>
            <img src={SLIDE2} alt="slide" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

const ListProduct = () => {
    
  const itemBoxStyle = {
    width: "300px",
    height: "450px",
    backgroundColor: "rgb(219, 199, 199)",
    margin: "10px",
    borderRadius: "10px",
  };

  const Titlle = {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: "bold",
    marginTop: "40px",
  };

  const itemGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const coverIMG = {
    margin: "0 0 20px 0",
  };

  const IMGstyle = {
    borderRadius: "10px 10px 0 0",
    objectPosition: "center center",
    width: "100%",
    height: "100%",
  };

  const detailStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  };

  const addIn4Style = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const showAllStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "20px"
  };

  const showAllButton = {
    border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer"
  };

  const showAllButtonHover = {
    backgroundColor: "#3e8e41"
  };

  return (
    <div className="item-box-list">
      <div className="category-item">
        <h2 className="title" style={Titlle}>
          category
        </h2>

        <div className="page category-page">
          <div className="item-grid" style={itemGridStyle}>
            <div className="item-box" style={itemBoxStyle}>
              <div style={coverIMG}>
                <a href="https://www.google.com/">
                  <img
                    src={testIMG}
                    alt="Lay ten cua san pham"
                    style={IMGstyle}
                  />
                </a>
              </div>

              <div className="detail" style={detailStyle}>
                <div>
                  <h2
                    className="product-title"
                    style={{ fontWeight: "bold", fontSize: "25px" }}
                  >
                    <a href="google.com">Ten san pham</a>
                  </h2>
                </div>

                <div className="addInfor" style={addIn4Style}>
                  <span
                    className="price old-price"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    Present price
                  </span>
                  <span
                    className="price present-price"
                    style={{ textDecoration: "line-through" }}
                  >
                    Old price
                  </span>
                </div>

                <div>
                  <span className="themChiTiet"> them chi tiet </span>
                </div>
              </div>
            </div>
            <div className="item-box" style={itemBoxStyle}>
              hi
            </div>
            <div className="item-box" style={itemBoxStyle}>
              hi
            </div>
            <div className="item-box" style={itemBoxStyle}>
              hi
            </div>
          </div>
        </div>

        <div className="show-all" style={showAllStyle}>
          <button style={showAllButton}>
            <a href="/loadToNextCategory">Click me!</a>
          </button>
          <React.Fragment>
        <style>
          {`
          button:hover {
              ${showAllButtonHover}
          }
          `}
        </style>
      </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export { Home, ListProduct };
