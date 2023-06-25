import Config from '../config';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * @typedef {Http}
 */
export default class Http {
  /**
   * @typedef { String }
   */
  relationship = '';

  http: AxiosInstance;

  path = '';

  options: AxiosRequestConfig;

  /**
   * @param {String} path
   * @param {Object} options
   * @param {Object} http
   */
  constructor(path?: string, options: AxiosRequestConfig = {}, http?: AxiosInstance) {
    if (path) {
      this.path = path;
    }

    this.options = options;
    this.http = http || Config;
  }

  /**
   * @param {String} path
   * @param {Object} options
   */
  static build(path: string, options: AxiosRequestConfig) {
    return new this(path, options);
  }

  /**
   * @param {String} start
   * @param {String} end
   * @returns {String}
   */
  static normalize(start: string, end: string) {
    return `${start}/${end}`.replace(/([^:]\/)\/+/g, '$1');
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  get(url: string, params = {}, opt = {}) {
    return this.http.get(url, { params: params, ...opt }).then(Http.then);
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  post(url: string, data: any, opt = {}) {
    return this.http.post(url, data, opt).then(Http.then);
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  put(url: string, data: any) {
    return this.http.put(url, data).then(Http.then);
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  patch(url: string, data: any) {
    return this.http.patch(url, data).then(Http.then);
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  delete(url: string, options = {}) {
    return this.http.delete(url, options).then(Http.then);
  }

  /**
   * @param {Object} response
   * @returns {Object}
   */
  static then(response: AxiosResponse) {
    try {
      if (!response) {
        return {};
      }

      if (!response.data) {
        return {};
      }

      if (response.data === '[]') {
        return [];
      }

      if (!(response.data.startsWith('[{') || response.data.startsWith('{'))) {
        return response;
      }

      if (typeof response.data === 'string') {
        return JSON.parse(response.data);
      }

      return response.data;
    } catch (error) {
      return response.data;
    }
  }
}
