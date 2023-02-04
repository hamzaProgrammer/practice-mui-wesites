import React , {memo} from 'react';
import {TextField ,InputAdornment  } from '@mui/material';

const MyInput = ({
        label,
        variant,
        required,
        defaultValue,
        type,
        disabled,
        helperText,
        error,
        sx,
        maxRows,
        value,
        handleChange,
        multiline,
        rows,
        Icon,
        size,
        hideLabel,
        fullWidth,
        placeholder,
        focused,
        color,
        id,
        className
    }) => {
        return (
        <>
            <TextField
                id={id ? id : "outlined-basic"}
                variant={variant ? variant : "outline"}
                label={label && label}
                required={required && required}
                defaultValue={defaultValue && defaultValue}
                type={type ? type : "text"}
                disabled={disabled && disabled}
                helperText={helperText && helperText}
                error={error && error}
                sx={sx && sx}
                rows={rows && rows}
                maxRows={maxRows && maxRows}
                value={value && value}
                onChange={handleChange && handleChange}
                multiline={multiline && multiline}
                startAdornment={
                    <InputAdornment position="start">
                        {Icon && <Icon />}
                    </InputAdornment>
                }
                size={size && size}
                hiddenLabel={true}
                fullWidth={fullWidth  && fullWidth }
                placeholder={placeholder && placeholder}
                focused={focused && focused }
                color={color && color}
                className={className &&className}
            />
        </>
    );
}

export default memo(MyInput);
