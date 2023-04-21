import React from "react";
import payment from "../../assets/payment.jpg";
import "./Success.scss";

const Success = () => {
  return (
    <div className="success__page">
      <div className="success__container">
        <div className="success__svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-check"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#D6F9DD"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <div className="success__msg">Payments Successful !</div>
        {/* <div className="success__amt"></div> */}
      </div>
      <div className="success__right">
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Success;
