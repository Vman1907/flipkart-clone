import { productsConstants } from "../actions/constants";
console.log("Before initializing initState");
const initState = {
  products: [],
  loading: false,
};
console.log("After initializing initState");
console.log(initState.products);
const product = (state = initState, action) => {
  switch (action.type) {
    case productsConstants.GET_ALL_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productsConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };

      break;
    default:
  }
  return state;
};

export default product;
