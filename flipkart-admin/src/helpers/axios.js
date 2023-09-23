import axios from "axios";
import { api } from "../urlConfig";

const getToken =()=>{
    const token = window.localStorage.getItem("token");
    console.log('token is '+ token);
    return (token? `Bearer ${token}`: 'none');
}


const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    'Authorization': getToken(),
    // 'Authorization': (window.localStorage.getItem("token")? `Bearer ${window.localStorage.getItem("token")}`: 'none'),
  },
});
export default axiosInstance;

