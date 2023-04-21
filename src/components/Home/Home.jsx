import { useEffect, useState, useContext } from "react";

import "./Home.scss";
import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Category from "./Category/Category";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  const getProducts = () => {
    setLoading(true);
    fetchDataFromApi(
      "/api/products?populate=*&pagination[start]=0&pagination[limit]=16"
    ).then((res) => {
      console.log(res);
      setProducts(res);
      setLoading(false);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main__content">
        <div>
          <Category categories={categories} />
          <Products
            loading={loading}
            products={products}
            text={"popular products"}
          />
          {/* {products.length === 0 ? (
            <h1>Loading products...</h1>
          ) : (
            <Products products={products} text={"popular products"} />
          )} */}
        </div>
      </div>
      {/* <Newsletter />
      <Footer /> */}
    </div>
  );
};

export default Home;
