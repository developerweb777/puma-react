import "./index.scss";
import logo from "../../assets/Images/LOGO.png";
import local from "../../assets/Images/local.png";
const index = () => {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="footer_one">
            <img src={logo} alt="" />
            <p className="footer_one_p">10 New Town Street, V2</p>
            <p className="footer_one_p2">5NW, Newstate. USA</p>
            <p className="footer_one_p3">shahzodbadriyev523@gmail.com</p>
            <img src={local} alt="" />
          </div>
          <ul>
            <strong>Our services</strong>
            <li>About Us</li>
            <li>Feature</li>
            <li>Gallary</li>
          </ul>
          <ul>
            <strong>Support</strong>
            <li>About Us</li>
            <li>Feature</li>
            <li>Gallary</li>
          </ul>
          <ul>
            <strong>Contact Us</strong>
            <li>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
export default index;
