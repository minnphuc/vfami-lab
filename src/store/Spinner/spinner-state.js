import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../init-state";

const spinnerState = createSlice({
  name: "spinner",
  initialState: INITIAL_STATE.spinner,
  reducers: {
    openSpinner(state) {
      state.isOpen = true;
    },
    closeSpinner(state) {
      state.isOpen = false;
    },
  },
});

export const spinnerActions = spinnerState.actions;

export default spinnerState.reducer;
