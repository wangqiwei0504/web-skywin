import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import router from '@/router';
import * as ls from '@/utils/localStorage';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 20000;
const service: AxiosInstance = axios.create({});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = ls.get('xToken');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
