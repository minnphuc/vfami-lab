import React from "react";

import LoginForm from "../components/Auth/LoginForm";

import classes from "./AuthPage.module.css";

function AuthPage() {
  return (
    <div className={classes.page}>
      <LoginForm />
    </div>
  );
}

export default AuthPage;
