import axiosInstance from "../../helpers/axios";
import { categoriesConstants } from "./constants";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoriesConstants.GET_ALL_CATEGORIES_REQUEST });
    const res = await axiosInstance.get("category/getCategory");
    console.log(res);
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoriesConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: categoriesConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({ type: categoriesConstants.ADD_NEW_CATEGORY_REQUEST });
    const res = await axiosInstance.post("/category/create", form);
    console.log(res);
    if (res.status === 201) {
      dispatch({
        type: categoriesConstants.ADD_NEW_CATEGORY_SUCCESS,
        payload: res.data.category,
      });
    } else {
      dispatch({
        type: categoriesConstants.ADD_NEW_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
