import { AUTH_TOKEN, USER_DATA } from './../types';

export const AuthFunction = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: 's',
  });
};
