import React from 'react';
import Divider from '@mui/material/Divider';

const MyDivider = ({component ,variant ,textAlign , label , orientation , children }) => {
    return (
        <>
            <Divider
                component={component && component }
                variant={variant ? variant : "inset"}
                textAlign={textAlign ? textAlign : "center"}
                label={label && label}
                orientation={orientation ? orientation : "horizontal"}
                color="red"
                >
                {children}
                </Divider>
        </>
    );
}

export default MyDivider;
