import { authActions } from "./auth-state";
import { spinnerActions } from "../Spinner/spinner-state";
import { modalActions } from "../Modal/modal-state";

import { JWT_EXPIRES_IN } from "../../config";

let logoutTimerId;

const calcRemainingTime = expiredTime => {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(expiredTime).getTime();

  const remainingTime = expirationTime - currentTime;

  return remainingTime;
};

const getStoredData = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const expiredTime = localStorage.getItem("expiredTime");

  const remainingTime = calcRemainingTime(expiredTime);

  // Less than 1 minute
  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiredTime");
    return null;
  }

  return {
    token,
    userId,
    remainingTime,
  };
};

const login = (dispatch, token, userId) => {
  dispatch(authActions.login({ token, userId }));

  const expiredTime = new Date(Date.now() + JWT_EXPIRES_IN);
  const remainingTime = calcRemainingTime(expiredTime);

  logoutTimerId = setTimeout(() => {
    dispatch(logoutRequest());
  }, remainingTime);

  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("expiredTime", expiredTime);
};

// ----THUNK----
export const logoutRequest = function () {
  return dispatch => {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiredTime");
    clearTimeout(logoutTimerId);
  };
};

export const signupRequest = function (userData) {
  return async dispatch => {
    dispatch(spinnerActions.openSpinner());

    try {
      const res = await fetch("http://127.0.0.1:3000/api/v1/user/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      const { token, user } = data;

      console.log(token, user);

      login(dispatch, token, user._id);
    } catch (err) {
      dispatch(modalActions.openModal({ title: "SIGNUP ERROR", content: err.message }));
    }

    dispatch(spinnerActions.closeSpinner());
  };
};

export const loginRequest = function (email, password) {
  return async dispatch => {
    dispatch(spinnerActions.openSpinner());

    try {
      const res = await fetch("http://127.0.0.1:3000/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "Content-Type": "application/json" },
      });

      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      const { token, user } = data;

      login(dispatch, token, user._id);
    } catch (err) {
      dispatch(modalActions.openModal({ title: "LOGIN ERROR", content: err.message }));
    }

    dispatch(spinnerActions.closeSpinner());
  };
};

export const loginWithStoredToken = function () {
  return dispatch => {
    const storedAuthData = getStoredData();

    if (storedAuthData === null) return;

    const { token, userId, remainingTime } = storedAuthData;

    dispatch(authActions.login({ token, userId }));

    logoutTimerId = setTimeout(() => {
      dispatch(logoutRequest());
    }, remainingTime);
  };
};
