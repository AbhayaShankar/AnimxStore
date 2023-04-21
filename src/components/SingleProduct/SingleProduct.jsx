import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";
import MoonLoader from "react-spinners/MoonLoader";

const SingleProduct = () => {
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  console.log("single product data", data);
  // console.log(data?.data?.[0].attributes?.img?.data?.[0]?.attributes?.url);

  const { handleAddToCart } = useContext(Context);

  const incCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decCounter = () => {
    setCounter((prev) => {
      if (prev === 1) return 1;
      else {
        return prev - 1;
      }
    });
    // if (counter === 0) {
    //   setCounter(0);
    // } else {
    //   setCounter((prev) => prev - 1);
    // }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div className="single__product__container">
      <div className="layout">
        <div className="single__product__page">
          <div className="left">
            {loading ? (
              <div className="loading">
                <MoonLoader
                  color="#9401ca"
                  cssOverride={{}}
                  loading
                  margin={5}
                  size={64}
                  speedMultiplier={1}
                />
                <h3 style={{ color: "#9401ca" }}>Loading</h3>
              </div>
            ) : (
              <img
                src={
                  data?.data?.[0].attributes?.img?.data?.[0]?.attributes?.url
                }
                alt=""
              />
            )}
          </div>
          <div className="right">
            <h2>{data?.data?.[0]?.attributes?.title}</h2>
            <span className="price">
              &#8377; {data?.data?.[0]?.attributes?.price}
            </span>
            <p>{data?.data?.[0]?.attributes?.desc}</p>
            <div className="cart__div">
              <div className="quantity__buttons">
                <span onClick={() => decCounter()}>-</span>
                <span>{counter}</span>
                <span onClick={() => incCounter()}>+</span>
              </div>
              <div className="cart">
                <FaCartPlus />
                <h3
                  className="add__to__cart"
                  onClick={() => {
                    handleAddToCart(data.data[0], counter);
                    setCounter(1);
                  }}
                >
                  Add to Cart
                </h3>
              </div>
            </div>
            <hr />
            <div className="sp__category">
              <div className="sp__title">Category :</div>
              <p className="sp__prod">
                {
                  data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
                    ?.title
                }
              </p>
            </div>
            <div className="sp__socials">
              <div className="sp__title">Share : </div>
              <div className="sp__social">
                <FaLinkedin />
                <FaPinterest />
                <FaGithub />
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={data?.data?.[0]?.attributes?.categories?.data?.[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
