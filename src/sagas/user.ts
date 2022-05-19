import { Action } from '../reducers';
import { LoginData } from '../actions/user';
import { call, put } from 'redux-saga/effects';
import apiService from '../services/apiService';
import { loginSuccess, clearUser } from '../actions/user';
import { requestStart, requestEnd, requestFailure } from '../actions/common';
import { ErrorType } from '../reducers/common';
import { saveData, clearAllData } from '../utils/storage';
import { getAuthTokenHeader } from '../services/client';

export function* login(action: Action<LoginData>): any {
  try {
    yield put(requestStart());

    const data = action.payload;

    const response = yield call(apiService.login, data);

    const { token } = response;

    yield call(saveData, 'access_token', token);

    yield put(loginSuccess(response));
    yield call(getAuthTokenHeader);
    yield put(requestEnd());
  } catch (error) {
    yield put(requestFailure(error as ErrorType));
  }
}

export function* logout(): any {
  try {
    yield put(requestStart());

    yield call(clearAllData);
    yield put(clearUser());

    yield put(requestEnd());
  } catch (error) {
    yield put(requestFailure(error as ErrorType));
  }
}
