import React, { useReducer } from "react";

import authContext from "./authContext";
import authReducer from "./authReducer";

import userAxios from "../../config/axios";
import authToken from "../../config/token";

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

  // sign up a user
  const signUpUser = async (data) => {
    try {
      const response = await userAxios.post("/api/users", data);
      //console.log(response.data);

      dispatch({
        type: SIGN_UP_SUCCESSFUL,
        payload: response.data,
      });

      // Get user
      aunthenticatedUser();
    } catch (error) {
      // console.log(error.response.data.msg);

      const alert = {
        msg: error.response.data.msg,
        category: "alert-error",
      };

      dispatch({
        type: SIGN_UP_ERROR,
        payload: alert,
      });
    }
  };

  // return auth user when sign up a user
  const aunthenticatedUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      // send token by headers
      authToken(token);
    }

    try {
      const response = await userAxios.get("/api/auth");
      //console.log(response);

      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error.response);

      dispatch({ type: LOG_IN_ERROR });
    }
  };

  // When a user logs in
  const logIn = async (data) => {
    try {
      const response = await userAxios.post("/api/auth", data);

      console.log(response);
    } catch (error) {
      console.log(error.response.data.msg);

      const alert = {
        msg: error.response.data.msg,
        category: "alert-error",
      };

      dispatch({
        type: LOG_IN_ERROR,
        payload: alert,
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
        logIn,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
