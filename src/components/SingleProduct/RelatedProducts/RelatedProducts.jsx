import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";
const RelatedProducts = ({ productId, categoryId }) => {
  const [loading, setLoading] = useState(true);
  const [relatedProd, setRelatedProd] = useState(true);

  const { data } = useFetch(
    `/api/products?populate=*&[filters][id][$ne]=${productId}&[filters][categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  // Temporary fix -- How to setLoading to false when only the data is defined
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   if (data?.data.length === 0) {
  //     setLoading(true);
  //   }
  //   if (data.data.length > 0) {
  //     setLoading(false);
  //   }
  //   // setLoading(false);
  // }, []);

  return (
    <div className="related__products">
      {console.log("related products", data)}
      <Products
        loading={loading}
        products={data}
        relatedProd={relatedProd}
        setRelatedProd={setRelatedProd}
        text={"Related Products"}
      />
    </div>
  );
};

export default RelatedProducts;
