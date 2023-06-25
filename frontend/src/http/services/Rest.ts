import { AxiosInstance, AxiosRequestConfig } from 'axios';
import Http from '../domain/Http';

/**
 * @typedef {Rest}
 */
export default class Rest extends Http {
  /**
   * @type {String}
   */
  static resource = '';

  static http: AxiosInstance | undefined;

  /**
   * @type {String}
   */
  id = '_id';

  /**
   * @param {String} resource
   * @param {Object} options
   * @param {Object} http
   */
  constructor(resource?: string, options: AxiosRequestConfig = {}, http?: AxiosInstance) {
    super(resource, options, http);
  }

  /**
   * @return {this}
   */
  static build() {
    return new this(this.resource, {}, this.http);
  }

  /**
   * PrepareRoute
   * funcao utilizada para definir a rota necessaria, sempre. até quando a relação for iniciada
   *
   * @param {String} end
   */
  prepareRoute(end: string): string {
    const url = `${this.path}/${this.relationship}/${end}`;

    const routeToSend = `${url}`.replace(/([^:]\/)\/+/g, '$1');

    this.cleanRelationship();

    return routeToSend;
  }

  /**
   * CleanRelationship
   * essa funcao deve ser sempre chamada para nao persistencia de dados na classe http
   */
  cleanRelationship() {
    this.relationship = '';
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  create(record: any, url = 'new') {
    return this.post(this.prepareRoute(`/${url}`), record);
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  send(record: any, url = '', opt: AxiosRequestConfig = {}) {
    return this.post(this.prepareRoute(`/${url}`), record, opt);
  }

  /**
   * @param {String|Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  read(record: string) {
    return this.get(this.prepareRoute(`/${this.getId(record)}`));
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  update(record: any, url = '') {
    return this.put(this.prepareRoute(url || `/${this.getId(record)}`), record);
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  destroy(record: string, options: any = { url: '', query: {} }) {
    return this.delete(this.prepareRoute(`/${options.url || ''}/${this.getId(record)}`), options.query);
  }

  /**
   * @param {Object} parameters
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  search(params = {}) {
    const queryString = this.buildQuery(params);

    // apply your logic here
    return this.get(this.prepareRoute(`?${queryString}`), params).then((response) => response);
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  store(record: any, url = '') {
    return this.post(this.prepareRoute(url), record);
  }

  upload(formData: any, url = '') {
    return this.post(this.prepareRoute(url), formData, {
      headers: {
        method: 'POST',
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
  }

  download(url = '') {
    return this.get(
      this.prepareRoute(url),
      {},
      {
        responseType: 'blob',
      },
    );
  }

  /**
   * @param {String|Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  request(record: any, filters = {}, opt = {}) {
    return this.get(this.prepareRoute(`/${this.getId(record)}`), filters, opt);
  }

  /**
   * @param {String|Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  show(record: any, filters = {}, opt = {}) {
    return this.get(this.prepareRoute(`/${this.getId(record)}`), filters, opt);
  }

  /**
   * @param {Object} parameters
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  index({ query, url }: { query?: any; url?: string }) {
    return this.get(this.prepareRoute(`/${url || ''}`), query);
  }

  /**
   * @param {String|Object} record
   * @returns {String}
   */
  getId(record: any) {
    if (typeof record === 'object') {
      return record[this.id];
    }

    return String(record);
  }

  buildQuery(obj: any, numPrefix?: any, tempKey?: any) {
    const outputString: string[] = [];

    obj = !obj ? {} : obj;

    Object.keys(obj).forEach((val) => {
      let key = val;

      if (numPrefix && !isNaN(Number.parseFloat(key))) {
        key = numPrefix + key;
      }

      key = encodeURIComponent(key.replace(/[!'()*]/g, escape));

      if (tempKey) {
        key = tempKey + '[' + key + ']';
      }

      if (typeof obj[val] === 'object') {
        const query = this.buildQuery(obj[val], null, key);

        if (query) {
          outputString.push(query);
        }
      } else {
        const value = encodeURIComponent(obj[val] + ''.replace(/[!'()*]/g, escape));

        if (key) {
          outputString.push(key + '=' + value);
        }
      }
    });

    return outputString.join('&');
  }

  queryString(obj: any = {}): string {
    return (
      Object.keys(obj)
        // eslint-disable-next-line arrow-body-style
        .map((key) => {
          return (
            key +
            '=' +
            (typeof obj[key] == 'object' && Object.keys(obj[key]).length > 0
              ? this.queryString(Object(obj[key]).values())
              : obj[key])
          );
        })
        .join('&')
    );
  }
}
