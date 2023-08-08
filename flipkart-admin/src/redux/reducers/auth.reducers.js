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
export default (state = {}, action) => {
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
        authenticating:false
      };
      break;
  }
  return state;
};
