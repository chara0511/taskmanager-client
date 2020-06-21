import {
  SIGN_UP_SUCCESSFUL,
  SIGN_UP_ERROR,
  GET_USER,
  LOG_IN_SUCCESSFUL,
  LOG_IN_ERROR,
  LOG_OUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESSFUL:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        auth: true,
        message: null,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    default:
      return state;
  }
};
