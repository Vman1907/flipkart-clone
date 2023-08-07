import { authConstants } from "../actions/constants";

const initState={
    name:'Adarsh'
};
export default (state={}, action)=>{

    console.log(action);

    switch(action.type){
        case authConstants.LOGIN_REQUIEST: 
        state={
            ...state,
            ...action.payload
        }
        break;
    }
    return state;
}