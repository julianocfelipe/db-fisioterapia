import { AxiosResponse, AxiosRequestConfig } from "axios";
import HttpMethods from "../domain/types/HttpMethods";
import Http from "./Http";

class Request {
  static get<T = any, R = AxiosResponse<T>>(
    path: string,
    params = {},
    config?: AxiosRequestConfig
  ): Promise<R> {
    return new Http().execute({
      method: HttpMethods.GET,
      path,
      data: { params },
      config,
    });
  }

  static post<T = any, R = AxiosResponse<T>>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return new Http().execute({
      method: HttpMethods.POST,
      path,
      data,
      config,
    });
  }

  static put<T = any, R = AxiosResponse<T>>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return new Http().execute({ method: HttpMethods.PUT, path, data, config });
  }

  static patch<T = any, R = AxiosResponse<T>>(
    path: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return new Http().execute<R>({
      method: HttpMethods.PATCH,
      path,
      data,
      config,
    });
  }

  static async delete<T = any, R = AxiosResponse<T>>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return new Http().execute({ method: HttpMethods.DELETE, path, config });
  }
}

export default Request;
