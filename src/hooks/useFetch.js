import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();
  // let modifiedUrl = endpoint.replace(/^https:\/\//, "");

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endpoint);
    console.log("Category ENDPOINT", endpoint);
    setData(res);
  };

  return { data };
};

export default useFetch;
