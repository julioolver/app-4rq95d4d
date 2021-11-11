import axios from "axios";

const http2 = axios.create({
    baseURL: 'https://julio-appmax.herokuapp.com/api/'
});

export default http2;