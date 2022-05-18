import { createReducer } from '@reduxjs/toolkit';
import commonConstants from '../constants/common';
import { Action } from './index';
import { LoginSuccessData } from '../actions/user';

export type ErrorType = {
  statusCode: number;
  message: string;
};

type InitialStateType = {
  error: null | ErrorType;
  loading: boolean;
};

const initialState: InitialStateType = {
  error: null,
  loading: false,
};

export default createReducer(initialState, builder => {
  builder
    .addCase(commonConstants.requestStart, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(commonConstants.requestEnd, state => {
      state.loading = false;
    })
    .addCase(commonConstants.requestFailure, (state, action: Action<ErrorType>) => {
      state.error = action.payload;
    });
})