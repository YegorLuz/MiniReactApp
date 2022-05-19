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

export const getText = () => ({
  type: commonConstants.getText,
});

export const saveText = (text: string) => ({
  type: commonConstants.saveText,
  payload: text,
});

export const verify = () => ({
  type: commonConstants.verify,
});