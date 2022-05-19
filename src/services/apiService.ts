import { AxiosRequestConfig } from 'axios';
import axios from './client';
import { LoginData } from '../actions/user';

const apiService = {
  login(data: LoginData) {
    return axios({
      method: 'POST',
      url: '/login',
      data,
      cancelKey: 'login',
    } as AxiosRequestConfig);
  },
  getText() {
    return axios({
      method: 'GET',
      url: '/text',
      cancelKey: 'getText',
    } as AxiosRequestConfig);
  },
  verify() {
    return axios({
      method: 'GET',
      url: '/verify',
      cancelKey: 'verify',
    } as AxiosRequestConfig);
  },
};

export default apiService;