import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_TOKEN_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  // let modifiedUrl = url.replace(/^https:\/\//, '');
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL + url,
      params
    );
    // console.log(data);
    return data;

    // if error then err block handles the error
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_TOKEN_KEY,
  },
});
