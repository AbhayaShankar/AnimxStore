import "./Products.scss";
import Product from "./Product/Product";
import BeatLoader from "react-spinners/BeatLoader";

const Products = ({
  innerProp,
  text,
  products,
  loading,
  setRelatedProd,
  relatedProd,
}) => {
  return (
    <div className="products__container">
      {!innerProp && <div className="section__heading">{text}</div>}
      {loading ? (
        <span>
          <h3>Loading Products... </h3>
          <BeatLoader
            color="#9401ca"
            cssOverride={{}}
            loading
            margin={5}
            size={18}
            speedMultiplier={1}
          />
        </span>
      ) : (
        <div className="products">
          {console.log("products length", products)}
          {products?.data?.map((prod) => (
            <Product key={prod.id} id={prod.id} data={prod.attributes} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
