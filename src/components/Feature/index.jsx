import React from "react";
import "./index.scss";
import card1 from "../../assets/Images/card1.png"
import card2 from "../../assets/Images/card2.png"
import card3 from "../../assets/Images/card3.png"
const index = () => {
  return (
    <>
      <section className="feature">

       <div className="container">
         <h2 className="feature_title_h2">Feature</h2>
        <h3 className="feature_title_h3">We have best feature in Shoes</h3>
        <div className="feature_cards">
          <div className="feature_cards_card">
            <img className="feature_cards_card_img" src={card1} alt="" />
            <h3 className="feature_cards_card_h3">Quality</h3>
            <p className="feature_cards_card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat mauris nisl est accumsan quis tempus.
            </p>
            <p className="feature_cards_card_link">Read More </p>
          </div>
          <div className="feature_cards_card">
            <img className="feature_cards_card_img" src={card2} alt="" />
            <h3 className="feature_cards_card_h3">Flexible</h3>
            <p className="feature_cards_card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat mauris nisl est accumsan quis tempus.
            </p>
            <p className="feature_cards_card_link">Read More </p>
          </div>
          <div className="feature_cards_card">
            <img className="feature_cards_card_img" src={card3} alt="" />
            <h3 className="feature_cards_card_h3">Long Lasting</h3>
            <p className="feature_cards_card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat mauris nisl est accumsan quis tempus.
            </p>
            <p className="feature_cards_card_link">Read More </p>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default index;
