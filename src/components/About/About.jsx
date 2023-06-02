import React from "react";
import about from "../../assets/about1.jpg";
import about3 from "../../assets/about3.png";
import "./About.scss";

const About = () => {
  return (
    <div className="about__main">
      <div className="about__img">
        <img src={about} alt="" />
      </div>

      <div className="about__content">
        <h1>About Us</h1>
        <div className="text__upper">
          <p>
            AnimxStore is an online e-commerce store offering a wide range of
            high-quality anime-inspired products. We are passionate about all
            things anime and committed to providing our customers with the best
            shopping experience possible.
          </p>

          <p className="p__lower">
            This website has a developer mode payment gateway integration using
            <span> STRIPE </span> and Backend by <span>strapi</span>.
          </p>
          <p>
            Our Team includes no one but me 🥲. Help me grow my website 🫡 Donate
            me money for releasing my own such website not with demo products.
          </p>
          <div className="text__lower">
            <img className="text__lower__img" src={about3} alt="" />
            <p>
              <span>Arigatou Gozaimasu </span> for choosing Anim-x-store as your
              go-to destination for anime merchandise. We're excited to share
              our love of anime with you and help you discover your next
              favorite character or series.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
