import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { login } from "../../services/login";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignInForm from './SignInForm';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));

export default function SignIn(props) {
    const classes = useStyles();
    const [loginInvalid, setLoginInvalid] = useState(false)

    async function handleLogin(data) {
        let allowed = await login(data); 
    
        if (!allowed) { 
            setLoginInvalid(true);
            return false; 
        }
    
        setLoginInvalid(false); 
        return true;
      }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
                <Typography component="h1" variant="h5"> Sign in </Typography>
                <SignInForm  {...props} handleLogin={handleLogin} hasErrors={loginInvalid} />
            </div>
        </Container>
    );
}