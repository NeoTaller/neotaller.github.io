import axios from "axios";


const axiosIntance = axios.create({
    baseURL: "http://161.97.138.249:3000/",
    // timeout: 1000,
    // headers: { 'Access-Control-Allow-Origin': '*' }
});

export default axiosIntance;