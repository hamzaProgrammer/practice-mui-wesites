import React from 'react';
import Avatar from '@mui/material/Avatar';

const MyAvatar = ({children , className , alt , src}) => {
    return (
        <>
            <Avatar
                alt={alt && alt}
                src={src && src}
                className={className && className}
            >
                {children}
            </Avatar>
        </>
    );
}

export default MyAvatar;
