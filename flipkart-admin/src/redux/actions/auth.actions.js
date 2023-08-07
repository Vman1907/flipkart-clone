import { authConstants } from "./constants"

export const login=(user)=> {
    console.log(user);
    return (dispatch)=>{
        dispatch({type: authConstants.LOGIN_REQUIEST, 
        payload:{
            ...user
        }});
    }
}