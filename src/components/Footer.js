import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Footer(props) {
    return (
        <Box mt={12}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/brognilucas">Lucas Brogni</Link>
                {` ${new Date().getFullYear()}`} 
            </Typography>
        </Box>
    );
}