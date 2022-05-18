import { Action } from '../reducers';
import { LoginData } from '../actions/user';
import { call, put } from 'redux-saga/effects';
import apiService from '../services/apiService';
import * as userActions from '../actions/user';
import { requestStart, requestEnd, requestFailure } from '../actions/common';
import { ErrorType } from '../reducers/common';

export function* login(action: Action<LoginData>): any {
  try {
    yield put(requestStart());

    const data = action.payload;

    const response = yield call(apiService.login, data);

    yield put(userActions.loginSuccess(response));
    yield put(requestEnd());
  } catch (error) {
    yield put(requestFailure(error as ErrorType));
  }
}