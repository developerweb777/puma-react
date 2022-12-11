import React from "react";
import "../Section/index.scss";
import intro from "../../assets/Images/intro.png";
const index = () => {
  return (
    <>
      <div className="container">
        <section className="shoes">
          <div className="shoes_text">
            <h2 className="shoes_text_h2">
              Life is better in running <br /> shoes.
            </h2>
            <p className="shoes_text_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eu
              ultrices ut
            </p>
          </div>
          <img className="shoes_img" src={intro} alt="intro" />
        </section>
        <div className="shoes_buy">
          <span className="shoes_buy_span">
            <p className="shoes_buy_span_p">brand</p>

            <select className="shoes_buy_select" name="shoes" id="shoes">
              <option selected disabled>
                Puma
              </option>
            </select>
          </span>
          <span className="shoes_buy_span">
            <p className="shoes_buy_span_p">Person</p>

            <select className="shoes_buy_select" name="shoes" id="shoes">
              <option selected disabled>
                man
              </option>
            </select>
          </span>
          <span className="shoes_buy_span">
            <p className="shoes_buy_span_p">Size</p>

            <select className="shoes_buy_select" name="shoes" id="shoes">
              <option selected disabled>
                large
              </option>
            </select>
          </span>
          <span className="shoes_buy_span">
            <p className="shoes_buy_span_p">Price</p>

            <select className="shoes_buy_select" name="shoes" id="shoes">
              <option selected disabled>
                $150
              </option>
            </select>
          </span>
          <button className="shoes_buy_btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default index;
