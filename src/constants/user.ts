import { SUCCESS } from './common';

export const USER = 'USER';

export const LOGIN = '_LOGIN';
export const LOGOUT = '_LOGOUT';
export const CLEAR = '_CLEAR';

const constants = {
  login: `${USER}${LOGIN}`,
  loginSuccess: `${USER}${LOGIN}${SUCCESS}`,
  logOut: `${USER}${LOGOUT}`,
  clearUser: `${USER}${CLEAR}`,
};

export default constants;