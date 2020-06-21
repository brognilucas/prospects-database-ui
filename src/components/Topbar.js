import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { MenuContext } from '../context/MenuContext';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu'
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Topbar = (props) => {
  const classes = useStyles();
  const [state, setState] = useContext(MenuContext)

  const handleDrawerToggle = () => {
    setState({ ...state, mobileOpen: !state.mobileOpen })
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar> 
        <Menu />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SideMenu />
    </AppBar>

  )
}

export default Topbar;