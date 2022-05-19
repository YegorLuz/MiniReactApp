import { takeLatest } from 'redux-saga/effects';
import userConstants from '../constants/user';
import commonConstants from '../constants/common';
import { login, logout } from './user';
import { getText, verify } from './common';

export function* watcher() {
  yield takeLatest(userConstants.login, login);
  yield takeLatest(userConstants.logOut, logout);
  yield takeLatest(commonConstants.getText, getText);
  yield takeLatest(commonConstants.verify, verify);
}