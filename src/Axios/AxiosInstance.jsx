import axios from "axios";

const AxiosInstance=axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'https://restapinodejs.onrender.com/api/'
})

export default AxiosInstance