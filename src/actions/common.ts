import commonConstants from '../constants/common';
import { ErrorType } from '../reducers/common';

export const requestStart = () => ({
  type: commonConstants.requestStart
});

export const requestEnd = () => ({
  type: commonConstants.requestEnd
});

export const requestFailure = (error: ErrorType) => ({
  type: commonConstants.requestFailure,
  payload: error,
});