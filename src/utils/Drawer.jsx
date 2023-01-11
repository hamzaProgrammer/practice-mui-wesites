import React from 'react';
import Drawer from '@mui/material/Drawer';


const MyDrawer = ({children , openState , onClickFunc}) => {
    console.log("openState => ", openState)
    return (
        <>
            <Drawer
                //anchor={anchor}
                open={openState}
                onClose={onClickFunc}
            >
                {children}
            </Drawer>
        </>
    );
}

export default MyDrawer;
