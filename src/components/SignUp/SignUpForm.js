import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = ({ handleSignup, ...props }) => {
  const classes = useStyles();
  const [errors, setErrors] = useState({ message: null });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      let err = {};
      Object.keys(values).map((key) => {
        if (!values[key].length) err[key] = true;
      });

      if (Object.keys(err).length){ 
        return setErrors({ ...errors, ...err , message: 'Missing required fields'})
      }

      if (values.password !== values.confirmPassword) { 
          return setErrors({ ...errors, password: true, confirmPassword: true , message: "Passwords don't match" })
      }

      handleSignup(values);
    },
  });
  
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={errors.name}
        onChange={formik.handleChange}
        id="name"
        label="Full Name"
        name="name"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={errors.email}
        onChange={formik.handleChange}
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={errors.password}
        onChange={formik.handleChange}
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        error={errors.password}
        onChange={formik.handleChange}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>

      <Snackbar open={!!(errors.message)} autoHideDuration={6000} onClose={() => setErrors({})}>
        <Alert severity="error" onClose={() => setErrors({})}>
          { errors.message }
        </Alert>
      </Snackbar>

    </form>
  );
};

export default SignUpForm;
