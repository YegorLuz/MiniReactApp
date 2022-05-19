export const REQUEST = 'REQUEST';
export const TEXT = 'TEXT';

export const START = '_START';
export const END = '_END';
export const FAILURE = '_FAILURE';
export const SUCCESS = '_SUCCESS';
export const GET = '_GET';
export const SAVE = '_SAVE';
export const VERIFY = '_VERIFY';

const constants = {
  requestStart: `${REQUEST}${START}`,
  requestEnd: `${REQUEST}${END}`,
  requestFailure: `${REQUEST}${FAILURE}`,
  getText: `${TEXT}${GET}`,
  saveText: `${TEXT}${SAVE}`,
  verify: `${VERIFY}`,
};

export default constants;