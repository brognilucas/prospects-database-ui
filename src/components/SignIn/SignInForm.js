import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInForm = ({ handleLogin , invalidLogin  , ...props }) => {
  const classes = useStyles();
  const [errors, setErrors] = useState({ email: null, password: null });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: async (values) => {
      if (!values.email || !values.password) {
        setErrors({
          email: !values.email.length,
          password: !values.password.length,
        });
        return false;
      }

      handleLogin(values);
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={errors.email || invalidLogin}
        onChange={formik.handleChange}
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={errors.password || invalidLogin}
        onChange={formik.handleChange}
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={
          <Checkbox
            onChange={formik.handleChange}
            name="remember"
            id="remember"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Button component={Link} to='/sign-up' href="#" variant="contained">
            {"Don't have an account? Sign Up"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignInForm;
