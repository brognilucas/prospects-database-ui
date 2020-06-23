import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
    Switch,
    Route,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const Content = (props) => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-up' component={SignUp} />
             </Switch>
        </main>
    )
}

export default Content;
