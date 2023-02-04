import React from 'react';
import {Paper} from "@mui/material"

const MyPaper = ({elevation , variant , sx , children ,className}) => {
    return (
        <>
            <Paper
                elevation={elevation ? elevation : 0}
                variant={variant && variant}
                sx={sx}
                className={className && className}
            >
                {children}
            </Paper>
        </>
    );
}

export default MyPaper;
