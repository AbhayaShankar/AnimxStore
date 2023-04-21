import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div key={id} className="product__card">
      <div className="thumbnail" onClick={() => navigate(`/products/${id}`)}>
        <img src={data.img.data[0].attributes.url} alt="" />
      </div>
      <div className="prod__details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
