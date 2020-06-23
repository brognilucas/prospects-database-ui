import React from 'react'; 
import LockIcon from "@material-ui/icons/Lock";
import ListIcon from '@material-ui/icons/List';
const generateMenu =  (loggedIn) => { 
    let openRoutes = [ 
        { route: '/prospects' , name: 'Prospects List' , icon: <ListIcon /> , showWhenLoggedIn: true },
        { route: '/sign-in' , name: 'Login' , icon: <LockIcon /> , showWhenLoggedIn: false },
    ]

    let protectedRoutes = [

    ]

    return [ 
        ...openRoutes, 
         ...(loggedIn ? protectedRoutes  : [] )
    ].filter((item) => { 
        return item.showWhenLoggedIn || !loggedIn
    })
}


export default generateMenu; 