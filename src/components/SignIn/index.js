import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import userService from "../../services/user";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignInForm from "./SignInForm";
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

export default function SignIn(props) {
  const classes = useStyles();
  const [loginInvalid, setLoginInvalid] = useState(false);
  const [state, setState] = useState(MenuContext);
  const history = useHistory();

  async function handleLogin(data) {
    let loggedIn = await userService.login(data);
    await setState({...state, loggedIn })
    history.push("/");
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
          Sign in{" "}
        </Typography>
        <SignInForm
          {...props}
          handleLogin={handleLogin}
          hasErrors={loginInvalid}
        />
      </div>
    </Container>
  );
}
