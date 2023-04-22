import "./Newsletter.scss";
import insta from "../../../assets/socials/instagram.png";
import linkedin from "../../../assets/socials/linkedin.png";
import twitter from "../../../assets/socials/twitter.png";
import github from "../../../assets/socials/github.png";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

const Newsletter = () => {
  const newsletterRef = useRef();
  const notify = () => toast("Thankyou for Subscribing! 😊");
  const [input, setInput] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_62zmjze",
        "template_vi5dzza",
        newsletterRef.current,
        "7vJ5xGx1KYFN86_YW"
      )
      .then(
        (result) => {
          console.log(result.text);
          newsletterRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="nl__main">
      <p className="nl__name">newsletter</p>
      <h3 className="nl__heading">Sign up for latest updates and offers</h3>
      <form className="nl__email" ref={newsletterRef} onSubmit={sendEmail}>
        <input
          className="nl__input"
          name="user__email"
          type="text"
          placeholder="Email Address"
        />
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
      </form>
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
