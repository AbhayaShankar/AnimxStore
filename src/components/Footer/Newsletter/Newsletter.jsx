import "./Newsletter.scss";
import insta from "../../../assets/socials/instagram.png";
import linkedin from "../../../assets/socials/linkedin.png";
import twitter from "../../../assets/socials/twitter.png";
import github from "../../../assets/socials/github.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const notify = () => toast("Thankyou for Subscribing! 😊");

  return (
    <div className="nl__main">
      <p className="nl__name">newsletter</p>
      <h3 className="nl__heading">Sign up for latest updates and offers</h3>
      <div className="nl__email">
        <input className="nl__input" type="text" placeholder="Email Address" />
        <button className="nl__btn" onClick={notify}>
          Subscribe
        </button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <p className="nl__privacy">
        Will be used in accordance with our Privacy Policy
      </p>
      <div className="nl__socials">
        <a href="https://www.linkedin.com/in/abhayashankar/" target="blank">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://www.instagram.com/abhaya_shankar05/" target="blank">
          <img src={insta} alt="" />
        </a>
        <a href="https://twitter.com/AbhayaShankar2" target="blank">
          <img src={twitter} alt="" />
        </a>
        <a href="https://github.com/AbhayaShankar" target="blank">
          <img src={github} alt="" />
        </a>
        {/* 
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={github} alt="" /> */}
        {/* <img src={facebook} alt="" /> */}
      </div>
    </div>
  );
};

export default Newsletter;
