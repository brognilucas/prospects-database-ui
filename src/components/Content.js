import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HomePage from './HomePage'
import ProspectsList from './ProspectsList';
import ProspectDetail from './ProspectDetail'
import {
    Switch,
    Route,
} from "react-router-dom";
import Evaluate from './Evaluate/'
import Evaluations from './Evaluations';

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
                <Route exact path='/' component={HomePage} />
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/prospects' component={ProspectsList} />
                <Route exact path='/prospects/:code' component={ProspectDetail} />
                <Route exact path='/prospects/:code/evaluations' component={Evaluations} />
                <Route exact path='/prospects/:code/evaluate' component={Evaluate} />
             </Switch>
        </main>
    )
}

export default Content;
