import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import "./Header.scss";

const Header = () => {
  const dropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { categories, setCategories } = useContext(Context);

  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleDropDown = () => {
    console.log("show");
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const navigate = useNavigate();
  return (
    <>
      <header className={`header ${scrolled ? "header__sticky" : ""}`}>
        <div className="header__left">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li
              className="header__cat"
              onClick={handleDropDown}
              ref={dropdownRef}
            >
              Categories
            </li>
            {/* data?.data?.[0]?.attributes?.title */}
          </ul>
          <div className={showDropdown ? "dropdown show" : "dropdown"}>
            <ul>
              {categories?.data?.map((item) => (
                <li
                  key={item.id}
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/category/${item.id}`);
                    console.log("onClick", item.id);
                    setShowDropdown(false);
                  }}
                >
                  {item.attributes.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="header__middle" onClick={() => navigate("/")}>
          Anim-x-Store
        </div>

        <div className="header__right">
          <TbSearch onClick={() => setSearch(true)} />
          <AiOutlineHeart />
          <span className="cart__icon">
            <CgShoppingCart onClick={() => setCart(true)} />
            {cartCount > 0 && (
              <span className={cartCount > 0 ? "cart__count" : ""}>
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </header>
      {cart && <Cart setCart={setCart} />}
      {search && <Search setSearch={setSearch} />}
    </>
  );
};

export default Header;
