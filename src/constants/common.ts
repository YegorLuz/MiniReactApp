export const REQUEST = 'REQUEST';

export const START = '_START';
export const END = '_END';
export const FAILURE = '_FAILURE';
export const SUCCESS = '_SUCCESS';

const constants = {
  requestStart: `${REQUEST}${START}`,
  requestEnd: `${REQUEST}${END}`,
  requestFailure: `${REQUEST}${FAILURE}`,
};

export default constants;