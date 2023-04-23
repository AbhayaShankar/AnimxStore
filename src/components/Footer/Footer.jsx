import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import payments from "../../assets/payments.png";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import { useContext, useEffect } from "react";
import upArrow from "../../assets/up.png";

const Footer = () => {
  const navigate = useNavigate();
  const { footerCategories, setFooterCategories, scroller } =
    useContext(Context);

  const getCategories = () => {
    fetchDataFromApi(
      "/api/categories?populate=*&[filters]&pagination[start]=0&pagination[limit]=6"
    ).then((res) => {
      console.log(res);
      setFooterCategories(res);
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="footer">
        <div className="footer__top">
          <div className="f__about">
            <h2>
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-external-link"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => navigate("/about")}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
                <line x1="10" y1="14" x2="20" y2="4" />
                <polyline points="15 4 20 4 20 9" />
              </svg>
            </h2>
            <p>
              AnimxStore is an online e-commerce store offering a wide range of
              high-quality anime-inspired products. We are passionate about all
              things anime and committed to providing our customers with the
              best shopping experience possible.
            </p>
          </div>
          <div className="f__contact">
            <h2>Contact</h2>
            <div className="fc__location">
              <ImLocation />
              <p>Animx Online Store © - New Delhi 110001</p>
            </div>
            <div className="fc__phone">
              <MdPhoneIphone />
              <p>Phone: 620***49**</p>
            </div>
            <div className="fc__email">
              <MdEmail />
              <p>Email: store@animx.com</p>
            </div>
          </div>
          <div className="f__category">
            <h2>Categories</h2>
            <ul className="f__categories">
              {footerCategories?.data?.map((item) => (
                <li
                  key={item.id}
                  onClick={() => navigate(`/category/${item.id}`)}
                >
                  {item.attributes.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="f__page">
            <h2>Pages</h2>
            <ul className="pages">
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li onClick={() => navigate("/about")}>About</li>
              <li onClick={() => navigate("/privacyPolicy")}>Privacy Policy</li>
              <li>Returns</li>
              <li onClick={() => navigate("/terms")}>Terms and Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <h3>
            AnimxStore Created by Abhaya Shankar <span>©</span>{" "}
          </h3>
          <img className="payments__img" src={payments} alt="" />
        </div>
      </div>
      {scroller && (
        <div className="scrollToTop">
          <button className="scrToTopBtn" onClick={handleScrollToTop}>
            <img src={upArrow} alt="" />
          </button>
          <p>Top</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
