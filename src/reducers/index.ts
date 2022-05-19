import user, { InitialStateType as UserStateType } from './user';
import common, { InitialStateType as CommonStateType } from './common';

export type Action<Payload> = {
  type: string;
  payload: Payload;
};

export type StateTypes = {
  user: UserStateType;
  common: CommonStateType;
};

const reducer = {
  user,
  common,
};

export default reducer;