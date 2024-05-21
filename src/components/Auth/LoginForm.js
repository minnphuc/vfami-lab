import React, { useState } from "react";
import {
  Button,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  Icon,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { loginRequest, signupRequest } from "../../store/Auth/auth-thunk";

import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const LoginForm = () => {
  const [isLoggingIn, setIsLogging] = useState(true);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const toggleFormMode = () => {
    setIsLogging(state => !state);
  };

  const submitHandler = data => {
    const email = data.email;
    const password = data.password;

    if (!isLoggingIn) {
      const name = data.name;
      dispatch(signupRequest({ name, email, password }));
      return;
    }

    console.log(email, password);

    dispatch(loginRequest(email, password));
  };

  const formFields = isLoggingIn ? ["email", "password"] : ["name", "email", "password"];

  const theme = createTheme({
    palette: {
      text: {
        secondary: "#3f3f3f",
      },
      button: {
        main: "#fe0000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: "25rem", padding: "1rem 1rem" }} elevation={4}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack direction="column" alignItems="center" gap={2}>
            <Stack direction="row" gap={1} sx={{ color: "button.main" }}>
              <Icon>
                <CatchingPokemonIcon />
              </Icon>

              <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700 }}>
                POKETRADE
              </Typography>
            </Stack>

            {formFields.map(field => (
              <TextField
                label={`Your ${field}`}
                type={field}
                name={field}
                error={!!errors[`${field}`]}
                helperText={!!errors[`${field}`] && `Please enter your ${field}`}
                fullWidth
                key={field}
                // MUI with RHF
                inputRef={register(field, { required: true })}
                onChange={e => setValue(field, e.target.value, { shouldValidate: true })}
              />
            ))}

            {/* <TextField
              label="Your Email"
              type="email"
              name="email"
              error={!!errors.email}
              helperText={!!errors.email && "Please enter your email"}
              fullWidth
              // MUI with RHF
              inputRef={register("email", { required: true })}
              onChange={e => setValue("email", e.target.value, { shouldValidate: true })}
            />
           */}

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "button.main",
                "&:hover": { bgcolor: "button.main", opacity: 0.7 },
                transition: "all ease 150ms",
                padding: "0.5rem 4rem",
              }}
            >
              {isLoggingIn ? "Login" : "Sign up"}
            </Button>

            <Typography
              variant="p"
              sx={{
                textDecoration: "underline",
                color: "primary.main",
                cursor: "pointer",
              }}
              onClick={toggleFormMode}
            >
              {isLoggingIn ? "Sign up a new account" : "Login with an existing account"}
            </Typography>
          </Stack>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default LoginForm;
