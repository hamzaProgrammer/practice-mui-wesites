import React from 'react';
import {Paper} from "@mui/material"

const MyPaper = ({elevation , variant , sx , children}) => {
    return (
        <>
            <Paper
                elevation={elevation ? elevation : 0}
                variant={variant && variant}
                sx={sx}
            >
                {children}
            </Paper>
        </>
    );
}

export default MyPaper;
