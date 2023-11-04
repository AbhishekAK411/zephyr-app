import axios from "axios";

const blogApi = axios.create({baseURL: process.env.REACT_APP_blogUri});

export default blogApi;