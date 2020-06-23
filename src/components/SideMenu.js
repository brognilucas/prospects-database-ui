import React, { useContext } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { MenuContext } from "../context/MenuContext";
import { Link , useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from "@material-ui/core/Button";
import generateMenu from "../services/menu";
import userService from '../services/user';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

const SideMenu = (props) => {
  const { window } = props;
  const classes = useStyles();
  const [state, setState] = useContext(MenuContext);
  const menu = generateMenu(state.loggedIn);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setState({ ...state, mobileOpen: !state.mobileOpen });
  };

  const logout = () => { 
    userService.logout().then(() => setState({ ...state, loggedIn: false })).then(() => { 
        history.push('/sign-in')
    }) 
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={"left"}
          open={state.mobileOpen}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <React.Fragment>
            <div className={classes.toolbar} />
            <Divider />
            <List>
              {menu.map((item) => (
                <ListItem button key={item.route}>
                  <Button component={Link} to={item.route}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </Button>
                </ListItem>
              ))}
              {state.loggedIn && (
                  <ListItem button key={'logout'}>
                  <Button onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                  </Button>
                </ListItem>
              )}
            </List>
          </React.Fragment>
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideMenu;
