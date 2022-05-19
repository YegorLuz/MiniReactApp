import { createReducer } from '@reduxjs/toolkit';
import commonConstants from '../constants/common';
import { Action } from './index';

export type ErrorType = {
  statusCode: number;
  message: string;
};

export type InitialStateType = {
  error: null | ErrorType;
  loading: boolean;
  text: string;
};

const initialState: InitialStateType = {
  error: null,
  loading: false,
  text: '',
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
    })
    .addCase(commonConstants.saveText, (state, action: Action<string>) => {
      state.text = action.payload;
    });
})