import React from "react";
import "./index.scss";
import video from "../../assets/Images/video.png";
const index = () => {
  return (
    <>
      <div className="container">
        <section className="desire">
          <div className="desire_text">
            <p className="desire_text_p">VIDEO</p>
            <h2 className="desire_text_h2">Desire the feel of satisfaction.</h2>
            <p className="desire_text_p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              auctor proin amet sagitt is semper ipsum at lectus. At{" "}
            </p>
          </div>
          <img className="desire_img" src={video} alt="" />
        </section>
      </div>
    </>
  );
};

export default index;
