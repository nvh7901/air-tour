import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn",
});

axiosAPI.interceptors.request.use(
  function (config) {
    config.headers.tokenByClass =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkZDNiN2E2MDQzNjAwMWM0ODU2OGQiLCJlbWFpbCI6Im5nby5odXkudmFuLjIwMDFAZ21haWwuY29tIiwidHlwZSI6IkNMSUVOVCIsImlhdCI6MTcxMDA4NTA1M30.cbtQhSagYX4nnh3FMirLAWm0iosnBvv3sYHBUT7S83s";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAPI.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosAPI;
