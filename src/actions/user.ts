import userConstants from '../constants/user';

export type LoginData = {
  login: string;
  password: string;
};

export type LoginSuccessData = {
  name: string;
  role: string;
  token: string;
};

export const login = (login: string, password: string) => ({
  type: userConstants.login,
  payload: { login, password },
});

export const loginSuccess = (data: LoginSuccessData) => ({
  type: userConstants.loginSuccess,
  payload: data,
});

export const logOut = () => ({
  type: userConstants.logOut,
});