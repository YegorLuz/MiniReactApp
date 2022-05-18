import { takeLatest } from 'redux-saga/effects';
import userConstants from '../constants/user';
import { login } from './user';

export function* watcher() {
  yield takeLatest(userConstants.login, login);
}