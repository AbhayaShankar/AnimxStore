import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import useFetch from "../../../hooks/useFetch";

import "./Search.scss";
const Search = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    console.log(data);
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$containsi]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search__modal">
      <div className="form__field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close__btn" onClick={() => setSearch(false)} />
      </div>
      <div className="search__results__container">
        <div className="search__results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search__result"
              onClick={() => {
                navigate("/products/" + item.id);
                setSearch(false);
              }}
            >
              <div className="img__container">
                <img src={item.attributes.img.data[0].attributes.url} alt="" />
              </div>
              <div className="prod__details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
