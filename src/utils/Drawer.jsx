import React from 'react';
import Drawer from '@mui/material/Drawer';


const MyDrawer = ({children , openState , onClickFunc}) => {
    return (
        <>
            <Drawer
                open={openState}
                onClose={onClickFunc}
            >
                {children}
            </Drawer>
        </>
    );
}

export default MyDrawer;
