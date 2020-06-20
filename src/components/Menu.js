import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> Prospects Database </Typography>
            <nav>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                    Features
          </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                    Enterprise
          </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                    Support
          </Link>
            </nav>
            <Button href="#" color=""  variant="contained" className={classes.link}>
                Login
        </Button>
        </React.Fragment>
    )
}

export default Menu;