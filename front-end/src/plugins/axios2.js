import axios from "axios";

const http2 = axios.create({
    baseURL: 'https://api-appmax.herokuapp.com/api/'
});

export default http2;