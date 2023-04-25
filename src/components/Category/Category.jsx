import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Category = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="category__main">
      {loading ? (
        <div className="loading">
          <h3>
            Loading{" "}
            {
              data?.data?.[0]?.attributes?.categories?.data[0]?.attributes
                ?.title
            }
          </h3>
          <BeatLoader
            color="#9401ca"
            cssOverride={{}}
            loading
            margin={5}
            size={18}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className="layout">
          <div className="category__title">
            <>
              {
                data?.data?.[0]?.attributes?.categories?.data[0]?.attributes
                  ?.title
              }
              <button className="backToHome" onClick={() => navigate("/")}>
                Back to Home
              </button>
            </>
          </div>
          <Products innerProp={true} products={data} />
        </div>
      )}
    </div>
  );
};

export default Category;
