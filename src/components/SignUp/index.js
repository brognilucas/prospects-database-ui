import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import userService from "../../services/user";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignUpForm from "./SignUpForm";
import { MenuContext } from "../../context/MenuContext";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();
  const [errors, setErrors]= useState({ });

  async function handleSignup(data) {
    let response = await userService.createAccount(data);

    if (!response) {
      return setErrors({ message: response })
    }
    history.push("/sign-in");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {" "}
          <LockOutlinedIcon />{" "}
        </Avatar>
        <Typography component="h1" variant="h5">
          {" "}
          Sign up{" "}
        </Typography>
        <SignUpForm {...props} handleSignup={handleSignup} errors={errors}/>
      </div>
    </Container>
  );
}
