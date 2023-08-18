import { userConstants } from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
  // success: false,
};
const users= (state = initState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      state = { ...state, loading: true, /*{success: false}*/ };
      break;
    case userConstants.USER_REGISTER_SUCCESS:
      state = { ...state, loading: false,/*success:true,*/ message: action.payload.message };
      break;
    case userConstants.USER_REGISTER_FAILURE:
      state = { ...state,/*success:false,*/ loading: false, error: action.payload.error };
      break;
    default:
      break;
  }
  return state;
};
export default users