import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { modalActions } from "../../../store/Modal/modal-state";

function Modal() {
  const { isOpen, title, content } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(modalActions.closeModal());
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fe0000",
      },
      text: {
        secondary: "#3f3f3f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isOpen} fullWidth maxWidth="sm">
        <DialogTitle color={"#fe0000"} fontWeight={"700"}>
          {title}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeHandler}>OK</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default Modal;
