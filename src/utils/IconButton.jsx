import React , {memo} from 'react';
import {IconButton } from "@mui/material"

const MyIconButton = ({Icon ,size ,ariaLabel , color ,loading , loadingIndicator ,variant , sx , href , id , className}) => {
    return (
        <>
            <IconButton
                aria-label={ariaLabel && ariaLabel}
                size={size}
                color={color}
                loading={loading}
                loadingIndicator={loadingIndicator}
                variant={variant}
                sx={sx}
                href={href}
                id={id && id}
                className = {className && className}
            >
                {Icon && Icon }
            </IconButton>
        </>
    );
}

export default memo(MyIconButton);
