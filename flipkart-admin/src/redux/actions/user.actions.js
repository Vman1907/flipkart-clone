import { Navigate } from "react-router-dom";
import axiosInstance from "../../helpers/axios";
import { userConstants } from "./constants";
import { Signin } from "../../containers/Signin";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axiosInstance.post("/admin/signup", {
      ...user,
    });
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
