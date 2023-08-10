/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    firstname: "",
    lastname: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
};
export default (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case authConstants.LOGIN_REQUIEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
      case authConstants.LOGOUT_REQUEST:
      state={
        ...initState
      }
      break;
    default:
      console.log("Something went wrong");
      break;
  }
  localStorage.setItem("auth", JSON.stringify(state));
  console.log(localStorage, "inside reducer");
  return state;
};
