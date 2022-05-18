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
};

export default apiService;