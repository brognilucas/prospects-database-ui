import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MenuContext } from '../context/MenuContext';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbarTitle: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

const Menu = (props) => {
    const [state, setState] = useContext(MenuContext);

    function signIn() {
        setState({ ...state, signInOpen: true });
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> Prospects Database </Typography>
            <nav>
                <Button component={Link} to='/' variant="button" color="textPrimary" component={Link} className={classes.link}>
                    Features
          </Button>
                <Button variant="button" color="textPrimary" component={Link} className={classes.link}>
                    Enterprise
          </Button>
                <Button variant="button" color="textPrimary" component={Link} className={classes.link}>
                    Support
          </Button>
            </nav>
            <Button component={Link} to='/sign-in' color="" onClick={signIn} variant="contained" className={classes.link}>
                Login
        </Button>
        </React.Fragment>
    )
}

export default Menu;