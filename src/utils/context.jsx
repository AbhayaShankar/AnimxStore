import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  // integration home and pages states
  const [categories, setCategories] = useState("");
  const [footerCategories, setFooterCategories] = useState("");
  const [products, setProducts] = useState("");
  const [scroller, setScroller] = useState(true);

  // cart states
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // logic

    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubtotal(subTotal);
  }, [cartItems]);

  // Adding product to our cart: req two things what product we are trying to add and what is the quantity that we are upaating so that we can update the subtotal
  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  // Removing the product from the cary just requires the product which we wan t to remove by checking the id +. If id matched then remove
  const handleremoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  // inside the cart, updating the prod quantity when increased or dec and hence updating the subtotal of the cary as well
  const handleCartProdQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        footerCategories,
        setFooterCategories,
        products,
        setProducts,
        scroller,
        setScroller,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubtotal,
        setCartSubtotal,
        handleAddToCart,
        handleremoveFromCart,
        handleCartProdQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
