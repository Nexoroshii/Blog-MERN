import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002/api",
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
