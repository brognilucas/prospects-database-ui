import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideMenu from './SideMenu';
import Topbar from './Topbar'
import Content from './Component';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function Container(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar />
      <SideMenu />
      <Content />
    </div>
  );
}

Container.propTypes = {
  window: PropTypes.func,
};

export default Container;
