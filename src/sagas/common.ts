import { call, put } from 'redux-saga/effects';
import { requestEnd, requestFailure, requestStart, saveText } from '../actions/common';
import { loginSuccess } from '../actions/user';
import apiService from '../services/apiService';
import { ErrorType } from '../reducers/common';

export function* verify(): any {
  try {
    yield put(requestStart());

    const { name, role } = yield call(apiService.verify);

    yield put(loginSuccess({ name, role }));

    yield put(requestEnd());
  } catch (error) {
    yield put(requestFailure(error as ErrorType));
  }
}

export function* getText(): any {
  try {
    yield put(requestStart());

    const response = yield call(apiService.getText);

    yield put(saveText(response.text));
    yield put(requestEnd());
  } catch (error) {
    yield put(requestFailure(error as ErrorType));
  }
}