const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
const initialState = {
  cart: {},
  user: storedUser,
  userAddress: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload[0]]: action.payload[1],
        },
      };

    case "DELETE_CART":
      const updatedCart = { ...state.cart };
      delete updatedCart[action.payload[0]];
      return {
        ...state,
        cart: updatedCart,
      };

    case "ADD_USER":
            localStorage.setItem("user", JSON.stringify(action.payload));
      console.log("User Added:", action.payload);
      return {
        ...state,
        user: action.payload, // ✅ fixed
      };

    case "DELETE_USER":
            localStorage.removeItem("user");
      return {
        ...state,
        user: {},
      };

    case "USER_ADDRESS":
      console.log("User Address:", action.payload);
      return {
        ...state,
        userAddress: action.payload,
      };

    case "CLEAR_ALL":
            localStorage.removeItem("user");
      return {
        cart: {},
        user: {},
        userAddress: {},
      };

    default:
      return state;
  }
}
