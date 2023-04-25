import "./Banner.scss";

import BannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner__div">
      <div className="banner__left">
        <div className="banner__top">
          <h1>Anime </h1>
          <img src="./icon.png" alt="" />
          <h1>{"  "} Store</h1>
        </div>
        <p>
          Welcome to Anim-x-Store, the ultimate destination for anime fans and
          collectors! Our online e-commerce store offers a wide range of
          products inspired by your favorite anime characters and shows. From
          action figures and plushies to apparel and accessories, we have
          everything you need to bring your love for anime to life. Our
          collection is carefully curated to provide you with the best and
          latest products in the market. With Anim-x-Store, you can unleash an
          experience like no other and find the weeb store that you have been
          looking for. Shop with us today and join our community of passionate
          anime fans!
        </p>
        <div className="banner__btns">
          <button className="banner__btn">Read more</button>
          <button className="banner__btn2">shop now</button>
        </div>
      </div>
      <img className="banner__img" src={BannerImg} alt="" />
    </div>
  );
};

export default Banner;
