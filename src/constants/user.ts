import { SUCCESS } from './common';

export const USER = 'USER';

export const LOGIN = '_LOGIN';
export const LOGOUT = '_LOGOUT';

const constants = {
  login: `${USER}${LOGIN}`,
  loginSuccess: `${USER}${LOGIN}${SUCCESS}`,
  logOut: `${USER}${LOGOUT}`,
};

export default constants;