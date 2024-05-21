import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth/auth-state";
import spinnerReducer from "./Spinner/spinner-state";
import modalReducer from "./Modal/modal-state";

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    spinner: spinnerReducer,
  },
});

export default store;
