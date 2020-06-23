import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topbar from './Topbar'
import Content from './Content';
import { makeStyles } from '@material-ui/core/styles';
import userService from "../services/user";
import { MenuContext } from '../context/MenuContext'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function Container(props) {
  const classes = useStyles();
  const [state, setState] = useContext(MenuContext); 


  useEffect(() => { 
    userService.validateSession().then((response) => {
      setState({ ...state, loggedIn: response });
    }).catch(() => setState({...state, loggedIn: false }))
  }, [])


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar />
      <Content />
    </div>
  );
}

Container.propTypes = {
  window: PropTypes.func,
};

export default Container;
