import { createReducer } from '@reduxjs/toolkit';
import userConstants from '../constants/user';
import commonConstants from '../constants/common';
import { Action } from './index';
import { LoginSuccessData } from '../actions/user';
import { ErrorType } from './common';

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
      state.loggedIn = true;
    })
    .addCase(commonConstants.requestFailure, (state, action: Action<ErrorType>) => {
      const { statusCode } = action.payload;
      if (statusCode === 401) {
        state.loggedIn = false;
      }
    })
    .addCase(userConstants.clearUser, (state) => {
      state.role = initialState.role;
      state.name = initialState.name;
      state.loggedIn = initialState.loggedIn;
    });
})