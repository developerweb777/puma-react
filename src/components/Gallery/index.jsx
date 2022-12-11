import React from "react";
import left from "../../assets/Images/left.svg";
import right from "../../assets/Images/right.svg";
import box1 from "../../assets/Images/box1.png";
import box2 from "../../assets/Images/box2.png";
import box3 from "../../assets/Images/box3.png";
import box4 from "../../assets/Images/box4.png";
import "./index.scss";
const index = () => {
  return (
    <>
      <div className="container">
        <section className="gallery">
          <h2 className="gallery_title_h2">GALLARY</h2>
          <h3 className="gallery_title_h3">40+YEARS EXPRERIENCE</h3>
          <div className="gallery_menu">
            <ul className="gallery_menu_ul">
              <strong className="gallery_menu_ul_strong">Categories:</strong>
              <li className="gallery_menu_ul_li">All</li>
              <li className="gallery_menu_ul_li">Male</li>
              <li className="gallery_menu_ul_li">Female</li>
              <li className="gallery_menu_ul_li">Kids</li>
            </ul>
            <span className="gallery_span_images">
              <img className="gallery_span_images1" src={left} alt="left" />
              <img className="gallery_span_images2" src={right} alt="right" />
            </span>
          </div>
          <div className="gallery_boxes">
            <div className="gallery_box">
              <img className="gallery_box_img" src={box1} alt="" />
              <div className="gallery_box_body">
                <h3 className="gallery_box_h3">Puma RS-X Bold</h3>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Size:</p>
                  <p className="gallery_box_span_p1">Dubble-XL</p>
                </span>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Price:</p>
                  <p className="gallery_box_span_p1">$200</p>
                </span>
                <button className="gallery_box_button">Buy Now</button>
              </div>
            </div>
            <div className="gallery_box">
              <img className="gallery_box_img" src={box2} alt="" />
              <div className="gallery_box_body">
                <h3 className="gallery_box_h3">Puma RS-X Bold</h3>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Size:</p>
                  <p className="gallery_box_span_p1">Dubble-XL</p>
                </span>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Price:</p>
                  <p className="gallery_box_span_p1">$200</p>
                </span>
                <button className="gallery_box_button">Buy Now</button>
              </div>
            </div>
            <div className="gallery_box">
              <img className="gallery_box_img" src={box3} alt="" />
              <div className="gallery_box_body">
                <h3 className="gallery_box_h3">Puma RS-X Bold</h3>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Size:</p>
                  <p className="gallery_box_span_p1">Dubble-XL</p>
                </span>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Price:</p>
                  <p className="gallery_box_span_p1">$200</p>
                </span>
                <button className="gallery_box_button">Buy Now</button>
              </div>
            </div>
            <div className="gallery_box">
              <img className="gallery_box_img" src={box4} alt="" />
              <div className="gallery_box_body">
                <h3 className="gallery_box_h3">Puma RS-X Bold</h3>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Size:</p>
                  <p className="gallery_box_span_p1">Dubble-XL</p>
                </span>
                <span className="gallery_box_span">
                  <p className="gallery_box_span_p">Price:</p>
                  <p className="gallery_box_span_p1">$200</p>
                </span>
                <button className="gallery_box_button">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
