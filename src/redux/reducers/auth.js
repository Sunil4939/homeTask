import { AUTH_TOKEN, DEVICE_ID, ONBOARDING, USER_DATA } from '../types';

const initialState = {
  token: null,
  onboarding: true,
  userData: null,
  deviceId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      case DEVICE_ID:
        return {
          ...state,
          deviceId: action.payload,
        };
    case ONBOARDING:
      return {
        ...state,
        onboarding: action.payload
      }
    case USER_DATA:
      return {
        ...state,
        userData: action.payload
      }

    default:
      return state;
  }
};
