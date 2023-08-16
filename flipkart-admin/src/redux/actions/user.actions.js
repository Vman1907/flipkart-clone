import axiosInstance from "../../helpers/axios";
import {  userConstants } from "./constants";

export const signup=(user)=> {
    return async (dispatch)=>{
        dispatch({type: userConstants.USER_REGISTER_REQUEST});
        const res=await axiosInstance.post('/admin/signup',{
            ...user
        });
        localStorage.setItem("res",JSON.stringify(res))
        if(res.status===200)
        {
            const {message } =res;
            dispatch({
                type:userConstants.USER_REGISTER_SUCCESS,
                payload:{
                    message
                }
            });
        }
        else{
            if(res.status===400)
            {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {error:res.data.error}
                })
            }
        }
        
    }
}