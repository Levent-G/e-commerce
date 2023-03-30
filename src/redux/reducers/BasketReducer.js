const initialState = {
  basketproduct: [],
  total: 0,
};
const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return {
        ...state,
        basketproduct: [...state.basketproduct, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      const index = state.basketproduct.findIndex(
        (item) => item.id === action.payload.id
      );
      const newItems = [...state.basketproduct];
      if (index >= 0) {
        newItems.splice(index, 1);
      }
      return {
        ...state,
        basketproduct: newItems,
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default BasketReducer;
