import axios from "axios";

//getallapiiiii------------------------------------------------------------------------------
export const ProductApiAction = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => dispatch({ type: "GET_PRODUCTS", payload: resp.data }));
  };
};
export const getOneProduct = (productId) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((resp) => dispatch({ type: "GET_ONEPRODUCT", payload: resp.data }));
  };
};
export const getSearch = (searchKey) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${searchKey}`)
      .then((resp) => dispatch({ type: "GET_SEARCH", payload: resp.data }));
  };
};
