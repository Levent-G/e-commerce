export const BasketAddProduct = (body) => {
  return (dispatch) => {
    dispatch({ type: "ADD_BASKET", payload: { body } });
  };
};

export const removeFromCart = (body) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: body,
  };
};
