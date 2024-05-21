import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../init-state";

const modalState = createSlice({
  name: "modal",
  initialState: INITIAL_STATE.modal,
  reducers: {
    openModal(state, action) {
      const { payload } = action;

      state.isOpen = true;
      state.title = payload.title;
      state.content = payload.content;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const modalActions = modalState.actions;

export default modalState.reducer;
