import axios, { AxiosRequestConfig, Method } from 'axios';
import { RequestOptions, ThrowOnError } from '../interfaces';

export class BaseRequestService {
  private baseUrl: string;

  // private static instance = false;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    //this.defaultHeaders = defaultHeaders;
  }

  // static newInstance(baseUrl: string, defaultHeaders: object) {
  //   if (!this.instance) {
  //     this.instance = true;
  //     return new BaseRequestService(baseUrl, defaultHeaders);
  //   }
  // }

  private getAxiosConfig(url: string, method: Method, headers?: any): AxiosRequestConfig {
    return {
      url,
      method,
      baseURL: this.baseUrl,
      headers: headers,
    };
  }

  get(url: string, options: RequestOptions, headers?: any) {
    if (options.param) url = `${url}/${options.param}`;
    else if (options.query) {
      const queryParams = options.query.map((qry) => `?${qry.propName}=` + qry.value);
      url = `${url}${queryParams.join()}`;
    }

    const config: AxiosRequestConfig = this.getAxiosConfig(url, 'GET', headers);
    return this.request(config);
  }

  post(url: string, data: any, options?: RequestOptions, headers?: any) {
    let config: AxiosRequestConfig = this.getAxiosConfig(url, 'POST', headers);
    config = {
      ...config,
      data,
    };
    return this.request(config);
  }

  put(url: string, options: RequestOptions, data: any, headers?: any) {
    if (options.param) url = `${url}/${options.param}`;
    else if (options.query) {
      const queryParams = options.query.map((qry) => `?${qry.propName}=` + qry.value);
      url = `${url}${queryParams.join()}`;
    }

    let config: AxiosRequestConfig = this.getAxiosConfig(url, 'PUT', headers);
    config = {
      ...config,
      data,
    };
    return this.request(config);
  }

  patch(url: string, options: RequestOptions, data: any, headers?: any) {
    if (options.param) url = `${url}/${options.param}`;
    else if (options.query) {
      const queryParams = options.query.map((qry) => `?${qry.propName}=` + qry.value);
      url = `${url}${queryParams.join()}`;
    }

    let config: AxiosRequestConfig = this.getAxiosConfig(url, 'PATCH', headers);
    config = {
      ...config,
      data,
    };
    return this.request(config);
  }

  delete(url: string, options: RequestOptions, headers?: any) {
    if (options.param) url = `${url}/${options.param}`;
    else if (options.query) {
      const queryParams = options.query.map((qry) => `?${qry.propName}=` + qry.value);
      url = `${url}${queryParams.join()}`;
    }
    const config: AxiosRequestConfig = this.getAxiosConfig(url, 'DELETE', headers);
    return this.request(config);
  }

  async request(config: AxiosRequestConfig, onError?: ThrowOnError) {
    try {
      const result = await axios(config);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
