import React, { useState } from 'react';

const MenuContext = React.createContext([{}, () => { }]);
const MenuProvider = (props) => {
    const [state, setState] = useState({ 
        mobileOpen: false, 
        loggedIn: false, 
        user: {}
    });

    return (
        <MenuContext.Provider value={[state, setState]}>
            {props.children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuProvider };