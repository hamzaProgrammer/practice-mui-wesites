import React from 'react';
import {Typography} from '@mui/material';

const MyTypography = ({
        children,
        variant,
        sx,
        gutterBottom,
        className
    }) => {
    return (
        <>
            <Typography
                variant={variant ? variant : "h6"}
                gutterBottom={gutterBottom & gutterBottom}
                sx={sx && sx}
                className = { className&& className}
                >
                {children}
            </Typography>
        </>
    );
}

export default MyTypography;
