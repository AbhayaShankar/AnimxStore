import React, { useState } from "react";
import Swal from "sweetalert2";
import errorImg from "../../assets/error.png";

import "./Error.scss";

const Error = () => {
  const [swalResult, setSwalResult] = useState(null);

  const handleButtonClick = () => {
    const result = Swal.fire({
      title:
        "Sumimasen! The page or content you are trying to find is not available",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    setSwalResult(result);
  };

  return (
    <div className="error__main" key={1}>
      <div className="error__container">
        <img className="error__img" src={errorImg} alt="" />
        <h3 className="error__title">OOPS! </h3>
        <p className="error__heading">404 - You have reached a dead end.</p>
        <p className="error__desc">
          The page or movie you are trying to find might not exist or is
          currently unavailable
        </p>
        <button onClick={handleButtonClick}>Show error</button>
        {swalResult && swalResult.value}
      </div>
    </div>
  );
};

export default Error;
