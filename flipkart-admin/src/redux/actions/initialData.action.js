import { InitialDataConstants, productsConstants } from "./constants"
import axiosInstance from "../../helpers/axios";

export const getInitialData=()=>{
    return async dispatch=>{
        const res=await axiosInstance.post('/initialdata');
        if(res.status===200)
        {
            const {categories, products}=res.data;
            dispatch({
                type:InitialDataConstants.GET_ALL_INITIAL_DATA_SUCCESS,
                payload: {categories}
            });
            dispatch({
                type: productsConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: {products}
            })
        }
        else{
            console.log(res);
        }
    }
}