// utils/customAxios.js
import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  responseType: "json",
});

// 요청 인터셉터 예시 (토큰 자동 추가 등)
// customAxios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// 응답 인터셉터 예시 (에러 처리 등)
// customAxios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // 에러 공통 처리
//     return Promise.reject(error);
//   }
// );

export default customAxios;
