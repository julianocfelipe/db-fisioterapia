import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
import AxiosConfig from "../domain/config/AxiosConfig";
import HttpMethods from "../domain/types/HttpMethods";

interface RequestParams {
  method: HttpMethods;
  path: string;
  data?: any;
  config?: AxiosRequestConfig;
}

class Http {
  axios: AxiosInstance = AxiosConfig;

  constructor(axios = AxiosConfig) {
    if (axios) {
      this.axios = axios;
    }
  }

  setHeader(name: string, value: string): void {
    const headers = AxiosConfig.defaults.headers as any;
    headers[name] = value;
  }

  async execute<R>({
    method,
    path,
    data = {},
    config = {},
  }: RequestParams): Promise<R> {
    try {
      const response = await this.httpRequest<R>({
        method,
        path,
        data,
        config,
      });

      return response;
    } catch (error: any) {
      const requestIsCanceled = !error.response;

      if (requestIsCanceled) {
        return Promise.reject(error);
      }

      const { data: errorData } = error.response;

      return Promise.reject(errorData);
    }
  }

  private async httpRequest<R>({
    method = HttpMethods.GET,
    path,
    data,
    config,
  }: RequestParams): Promise<R> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const axiosMethod = this.axios[`${method}`.toLowerCase()];

    const reqConfig = this.getConfig(config || {});

    if ([HttpMethods.GET, HttpMethods.DELETE].includes(method)) {
      return await axiosMethod(path, { ...reqConfig, ...data });
    }

    return await axiosMethod(path, data, reqConfig);
  }

  private getConfig(config: object): object {
    const headers = this.axios.defaults.headers as any;

    return {
      responseType: "json",
      headers: {
        Authorization: `Bearer ${headers.Authorization || ""}`,
        "Content-Type": "application/json",
      },
      ...config,
    };
  }
}

export default Http;
