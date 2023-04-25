import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setCart }) => {
  const { cartItems, cartSubtotal, setScroller } = useContext(Context);
  const navigate = useNavigate();

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setScroller(false);
  }, []);

  return (
    <div className="cart__panel">
      <div className="cart__opac__layer"></div>
      <div className="cart__content">
        <div className="cart__header">
          <span className="cart__heading">Shopping Cart</span>
          <span
            className="close__btn"
            onClick={() => {
              setCart(false);
              setScroller(true);
            }}
          >
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart__empty">
            <BsCartX />
            <span>Oops! There are no items in the Cart</span>
            <button
              className="return__to__home"
              onClick={() => {
                navigate("/");
                setCart(false);
              }}
            >
              Return to Home
            </button>
          </div>
        ) : (
          <>
            <CartItem />
            <div className="cart__footer">
              <div className="subtotal">
                <span className="text">Subtotal : </span>
                <span className="text total">&#8377; {cartSubtotal} </span>
              </div>
              <div className="button">
                <button className="checkout__btn" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
