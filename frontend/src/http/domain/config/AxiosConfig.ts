import axios from "axios";
import qs from "qs";

const AxiosConfig = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 60000,
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

AxiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      !(
        window.location.pathname === "/" ||
        window.location.pathname.includes("login") ||
        window.location.pathname.includes("signup") ||
        window.location.pathname.includes("feedback") ||
        window.location.pathname.includes("recover")
      )
    )
      window.location.href = "/login/?error=401";

    if (error.response.status === 502 || error.code === "ERR_NETWORK")
      throw new Error("Servidor indisponivel!");

    throw error;
  }
);

export default AxiosConfig;
