import user, { InitialStateType as UserStateType } from './user';

export type Action<Payload> = {
  type: string;
  payload: Payload;
};

export type StateTypes = {
  user: UserStateType;
};

const reducer = {
  user,
};

export default reducer;