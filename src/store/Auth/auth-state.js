import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../init-state";

const authState = createSlice({
  name: "auth",
  initialState: INITIAL_STATE.auth,
  reducers: {
    login(state, action) {
      const { payload } = action;
      const { token, userId } = payload;

      state.token = token;
      state.isLogin = !!token;
      state.userId = userId;
    },

    logout(state) {
      state.token = "";
      state.isLogin = !!state.token;
      state.userId = "";
    },
  },
});

export const authActions = authState.actions;

export default authState.reducer;
