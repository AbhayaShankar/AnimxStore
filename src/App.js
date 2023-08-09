import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Cart from "./components/Cart/Cart";
import Terms from "./components/Terms/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Category from "./components/Category/Category";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import Success from "./components/Success/Success";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/:id" element={<Category />}></Route>
          <Route path="/products/:id" element={<SingleProduct />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
