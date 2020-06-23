import React from 'react'; 
import LockIcon from "@material-ui/icons/Lock";

const generateMenu =  (loggedIn) => { 
    console.log('loggedIn ' , loggedIn)
    let openRoutes = [ 
        { route: '/sign-in' , name: 'Login' , icon: <LockIcon /> , showWhenLoggedIn: false }
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