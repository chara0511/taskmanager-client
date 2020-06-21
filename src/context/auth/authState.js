import React, { useReducer } from "react";

import authContext from "./authContext";
import authReducer from "./authReducer";

import clientAxios from "../../config/axios";

import {
  SIGN_UP_SUCCESSFUL,
  SIGN_UP_ERROR,
  GET_USER,
  LOG_IN_SUCCESSFUL,
  LOG_IN_ERROR,
  LOG_OUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    auth: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Functions
  const signUpUser = async (data) => {
    try {
      const response = await clientAxios.post("/api/users", data);
      console.log(response);

      dispatch({
        type: SIGN_UP_SUCCESSFUL,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SIGN_UP_ERROR,
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        signUpUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
