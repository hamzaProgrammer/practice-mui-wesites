import React , {memo} from 'react';
import {Button}  from "@mui/material"
import '../App.css'

const MyButton = ({
        children,
        variant,
        disabled,
        link,
        onClickFunc,
        color,
        size,
        StartIcon,
        EndIcon,
        loading,
        loadingPosition,
        fullWidth,
        sx,
        className,
        InputProps,
        disableRipple
    }) => {
    return (
    <>
        <Button
            variant={variant ? variant : "text"}
            disabled={disabled && disabled}
            href={link && link}
            onClick={() => {
                onClickFunc()
            }}
            //color={color & color}
            size={size && size}
            disableRipple={disableRipple && disableRipple}
            startIcon={StartIcon && StartIcon}
            endIcon={EndIcon && EndIcon}
            loading ={loading && loading}
            loadingPosition={loadingPosition && loadingPosition}
            fullWidth={fullWidth  && fullWidth	}
            sx={sx && sx}
            className={className}
            InputProps={InputProps}
            >
            {children}
        </Button>
    </>
  );
}

export default memo(MyButton);
