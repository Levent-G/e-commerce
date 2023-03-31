const initialState = {
  products: [],
  getoneproduct: [],
  search: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONEPRODUCT":
      return { ...state, getoneproduct: action.payload };
    case "GET_SEARCH":
      return { ...state, search: action.payload };
    case "GET_CATEGORY":
      return { ...state, getcat: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
