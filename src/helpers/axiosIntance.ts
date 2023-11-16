import axios from "axios";


const axiosIntance = axios.create({
    baseURL: "http://localhost:3000",
    // timeout: 1000,
    // headers: { 'Access-Control-Allow-Origin': '*' }
});

export default axiosIntance;