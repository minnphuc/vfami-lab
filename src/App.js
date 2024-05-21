import "./App.css";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
// import AuthPage from "./pages/AuthPage";
import Spinner from "./components/UI/Spinner/SpinKit";
import Modal from "./components/UI/Modal/Modal";

function App() {
  // const { isLogin } = useSelector(state => state.auth);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      text: {
        secondary: "#fe0000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route path="/home" element={<HomePage />} />
      </Routes>

      <Spinner />
      <Modal />
    </ThemeProvider>
  );
}

export default App;
