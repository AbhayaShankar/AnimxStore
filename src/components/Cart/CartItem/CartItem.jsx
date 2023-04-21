import { useContext } from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleremoveFromCart, handleCartProdQuantity } =
    useContext(Context);
  return (
    <div className="cart__products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart__product">
          <div className="img__container">
            <img
              src={item.attributes?.img?.data?.[0]?.attributes?.url}
              alt=""
            />
          </div>
          <div className="prod__details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close"
              onClick={() => handleremoveFromCart(item)}
            />
            <div className="quantity__buttons">
              <span onClick={() => handleCartProdQuantity("dec", item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProdQuantity("inc", item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">&#8377;{item.attributes.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
