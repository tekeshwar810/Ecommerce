import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function AuthUser() {
    //   const navigate = useNavigate();

    const http = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            "Content-type": "application/json"
        }
    });

    const userInfo = (data) =>{
        sessionStorage.setItem('userInfo',JSON.stringify(data))
    }

    return {
        http,
        userInfo
    }
}
