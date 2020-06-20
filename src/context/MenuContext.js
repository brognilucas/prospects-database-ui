import React, { useState } from 'react';

const MenuContext = React.createContext([{}, () => { }]);
const MenuProvider = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <MenuContext.Provider value={[mobileOpen, setMobileOpen]}>
            {props.children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuProvider };