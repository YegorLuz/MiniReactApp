import { createReducer } from '@reduxjs/toolkit';
import userConstants from '../constants/user';
import { Action } from './index';
import { LoginSuccessData } from '../actions/user';

export type InitialStateType = {
  role: string;
  name: string;
  loggedIn: boolean;
};

const initialState: InitialStateType = {
  role: 'user',
  name: '',
  loggedIn: false,
};

export default createReducer(initialState, builder => {
  builder
    .addCase(userConstants.loginSuccess, (state, action: Action<LoginSuccessData>) => {
      const data = action.payload;
      state.role = data.role;
      state.name = data.name;
      console.log(data.token);
      state.loggedIn = true;
    });
})