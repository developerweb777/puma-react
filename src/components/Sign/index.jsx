import React from "react";
import "./index.scss";
import sign from "../../assets/Images/sign.png";
const index = () => {
  return (
    <>
      <div className="container">
        <section className="sign">
          <img src={sign} alt="" />
          <div className="sign_text">
            <h2 className="sign_text_h2">Sign Up to our Newsletter</h2>
            <p className="sign_text_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in elementum tempus, vestibulum faucibus tortor odio
              elit.
            </p>
            <input className="sign_text_input" type="text" placeholder="Enter your email address" name="" id="" />
            <button className="sign_text_button">Send</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
