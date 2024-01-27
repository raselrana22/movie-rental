const initialState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        cartData: [...state.cartData, action.payload],
      };

    case "Remove_To_Cart":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
  }
};

export { cartReducer, initialState };
