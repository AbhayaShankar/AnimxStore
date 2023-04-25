import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import BeatLoader from "react-spinners/BeatLoader";

import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      slidesPerView={3.7}
      freeMode={true}
      breakpoints={{
        360: {
          slidesPerView: 1.75,
          spaceBetween: 20,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        510: {
          slidesPerView: 2.25,
          spaceBetween: 20,
        },
        560: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="main__category "
    >
      <div className="categories">
        {categories.length === 0 && (
          <span>
            <h3>Loading </h3>
            <BeatLoader
              color="#9401ca"
              cssOverride={{}}
              loading
              margin={5}
              size={18}
              speedMultiplier={1}
            />
          </span>
        )}
        {categories?.data?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="category"
            onClick={() => navigate(`category/${item.id}`)}
          >
            <img
              className="cat__img"
              src={item.attributes.img.data.attributes.url}
              alt=""
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Category;
